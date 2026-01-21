import { Roboto_Flex, Abril_Fatface, Marck_Script } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
});

const abrilFatface = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-abril-fatface",
});

const marckScript = Marck_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marck-script",
});

export const metadata = {
  title: "Rahim Rehman",
  description: "Rahim Rehman Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${robotoFlex.variable} ${abrilFatface.variable} ${marckScript.variable} bg-[#000000] text-white antialiased overflow-x-hidden`}
      >
        <div className="relative">
          <div className="absolute top-40 right-0  h-[700px] w-[600px] bg-[radial-gradient(circle,#035AB7,#072340)] rounded-full opacity-40 blur-[180px] pointer-events-none overflow-x-hidden"></div>
          <Navbar />
          <main className="">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
