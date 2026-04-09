"use client";

import { useEffect, useState, useRef } from "react";

// ─── Particle Canvas ─────────────────────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const PARTICLE_COUNT = 80;
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.4,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.6 + 0.15,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // connection lines
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((q) => {
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(49,144,245,${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        });
      });

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(49,144,245,${p.alpha})`;
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

// ─── Countdown Unit ───────────────────────────────────────────────────────────
function CountUnit({ value, label }) {
  const [prev, setPrev] = useState(value);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    if (value !== prev) {
      setFlip(true);
      const t = setTimeout(() => {
        setPrev(value);
        setFlip(false);
      }, 350);
      return () => clearTimeout(t);
    }
  }, [value, prev]);

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="relative w-20 h-20 md:w-28 md:h-28 rounded-2xl flex items-center justify-center overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(49,144,245,0.25)",
          boxShadow:
            "0 0 30px rgba(49,144,245,0.12), inset 0 1px 0 rgba(255,255,255,0.06)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* top half */}
        <div className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden">
          <span
            className="absolute inset-0 flex items-end justify-center pb-0"
            style={{
              fontSize: "clamp(2rem, 6vw, 3.5rem)",
              fontFamily: "var(--font-poppins)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1,
              transform: flip ? "translateY(-100%)" : "translateY(0)",
              transition: flip ? "transform 0.35s cubic-bezier(0.4,0,0.2,1)" : "none",
            }}
          >
            {String(value).padStart(2, "0")}
          </span>
        </div>

        {/* divider */}
        <div
          className="absolute left-0 right-0"
          style={{
            top: "50%",
            height: "1px",
            background: "rgba(49,144,245,0.3)",
            zIndex: 10,
          }}
        />

        {/* bottom half */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden">
          <span
            className="absolute inset-0 flex items-start justify-center pt-0"
            style={{
              fontSize: "clamp(2rem, 6vw, 3.5rem)",
              fontFamily: "var(--font-poppins)",
              fontWeight: 700,
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1,
            }}
          >
            {String(prev).padStart(2, "0")}
          </span>
        </div>
      </div>
      <span
        className="uppercase tracking-widest text-xs md:text-sm"
        style={{ color: "rgba(49,144,245,0.8)", fontFamily: "var(--font-poppins)" }}
      >
        {label}
      </span>
    </div>
  );
}

// ─── Countdown ────────────────────────────────────────────────────────────────
const LAUNCH_DATE = new Date("2026-06-01T00:00:00");

function useCountdown(target) {
  const calc = () => {
    const diff = Math.max(0, target - Date.now());
    return {
      days: Math.floor(diff / 864e5),
      hours: Math.floor((diff % 864e5) / 36e5),
      minutes: Math.floor((diff % 36e5) / 6e4),
      seconds: Math.floor((diff % 6e4) / 1e3),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}



// ─── Orbiting Ring ────────────────────────────────────────────────────────────
function OrbitRing({ size, duration, color, delay = 0, children }) {
  return (
    <div
      className="absolute rounded-full border pointer-events-none"
      style={{
        width: size,
        height: size,
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        borderColor: color,
        borderStyle: "dashed",
        animation: `spin ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ComingSoon() {
  const { days, hours, minutes, seconds } = useCountdown(LAUNCH_DATE);

  return (
    <>
      <style>{`
        @keyframes shake {
          0%,100%{transform:translateX(0)}
          20%{transform:translateX(-8px)}
          40%{transform:translateX(8px)}
          60%{transform:translateX(-5px)}
          80%{transform:translateX(5px)}
        }
        @keyframes spin {
          from { transform: translate(-50%,-50%) rotate(0deg); }
          to   { transform: translate(-50%,-50%) rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: translate(-50%,-50%) rotate(0deg); }
          to   { transform: translate(-50%,-50%) rotate(-360deg); }
        }
        @keyframes float {
          0%,100%{ transform: translateY(0px); }
          50%    { transform: translateY(-18px); }
        }
        @keyframes glow-pulse {
          0%,100%{ opacity: 0.35; transform: scale(1); }
          50%    { opacity: 0.65; transform: scale(1.08); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scan {
          0%   { top: 0; }
          100% { top: 100%; }
        }
        .fade-up-1 { animation: fade-up 0.8s ease both; animation-delay: 0.1s; }
        .fade-up-2 { animation: fade-up 0.8s ease both; animation-delay: 0.3s; }
        .fade-up-3 { animation: fade-up 0.8s ease both; animation-delay: 0.5s; }
        .fade-up-4 { animation: fade-up 0.8s ease both; animation-delay: 0.7s; }
        .fade-up-5 { animation: fade-up 0.8s ease both; animation-delay: 0.9s; }
        .spin-reverse {
          animation: spin-reverse 16s linear infinite;
          transform: translate(-50%,-50%);
        }
      `}</style>

      {/* Background */}
      <div className="fixed inset-0" style={{ background: "#000" }} />

      {/* Radial glows */}
      <div
        className="fixed pointer-events-none"
        style={{
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(13,93,105,0.45) 0%, transparent 70%)",
          animation: "glow-pulse 6s ease-in-out infinite",
          zIndex: 1,
        }}
      />
      <div
        className="fixed pointer-events-none"
        style={{
          bottom: "-100px",
          right: "-100px",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(10,66,125,0.35) 0%, transparent 70%)",
          animation: "glow-pulse 8s ease-in-out infinite 3s",
          zIndex: 1,
        }}
      />

      {/* Particle canvas */}
      <ParticleCanvas />

      {/* Orbiting decorative rings (desktop only) */}
      <div className="hidden xl:block fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <OrbitRing size="520px" duration={20} color="rgba(49,144,245,0.08)" />
        <OrbitRing size="680px" duration={28} color="rgba(13,93,105,0.1)" delay={-5}>
          {/* dot on ring */}
          <div
            className="absolute w-3 h-3 rounded-full"
            style={{
              top: "6px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(49,144,245,0.7)",
              boxShadow: "0 0 10px rgba(49,144,245,0.9)",
            }}
          />
        </OrbitRing>
        <OrbitRing size="860px" duration={38} color="rgba(49,144,245,0.05)" delay={-12} />
      </div>

      {/* ── Content ── */}
      <div
        className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center"
        style={{ zIndex: 10 }}
      >
        {/* Badge */}
        <div className="fade-up-1 mb-8">
          <span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest"
            style={{
              background: "rgba(49,144,245,0.1)",
              border: "1px solid rgba(49,144,245,0.3)",
              color: "rgba(49,144,245,0.95)",
              fontFamily: "var(--font-poppins)",
              backdropFilter: "blur(12px)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{
                background: "#3190F5",
                boxShadow: "0 0 8px #3190F5",
                animation: "glow-pulse 1.5s ease-in-out infinite",
              }}
            />
            Website is Live — Coming Soon
          </span>
        </div>

        {/* Main heading */}
        <div className="fade-up-2 mb-4" style={{ animation: "float 5s ease-in-out infinite" }}>
          <h1
            className="text-6xl md:text-8xl xl:text-9xl font-bold leading-none tracking-tight"
            style={{
              fontFamily: "var(--font-abril-fatface)",
              background: "linear-gradient(135deg, #ffffff 0%, #3190F5 50%, #0d5d69 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 60px rgba(49,144,245,0.3))",
            }}
          >
            Coming
            <br />
            Soon
          </h1>
        </div>

        {/* Sub text */}
        <p
          className="fade-up-3 max-w-lg text-base md:text-lg mb-12 leading-relaxed"
          style={{
            color: "rgba(255,255,255,0.55)",
            fontFamily: "var(--font-poppins)",
          }}
        >
          Something extraordinary is being crafted. A portfolio experience like you've
          never seen before — launching very soon.
        </p>

        {/* Countdown */}
        <div className="fade-up-4 flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-14">
          <CountUnit value={days} label="Days" />
          <Separator />
          <CountUnit value={hours} label="Hours" />
          <Separator />
          <CountUnit value={minutes} label="Minutes" />
          <Separator />
          <CountUnit value={seconds} label="Seconds" />
        </div>

     

       

        {/* Bottom home link */}
        <a
          href="/"
          className="mt-10 text-xs tracking-widest uppercase flex items-center gap-2 transition-all duration-300 hover:gap-3"
          style={{ color: "rgba(49,144,245,0.6)", fontFamily: "var(--font-poppins)" }}
        >
          <span>←</span> Back to Home
        </a>
      </div>
    </>
  );
}

function Separator() {
  return (
    <span
      className="hidden sm:block text-4xl font-thin pb-8"
      style={{ color: "rgba(49,144,245,0.3)", fontFamily: "var(--font-poppins)" }}
    >
      :
    </span>
  );
}
