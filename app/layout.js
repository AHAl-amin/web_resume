import { Roboto_Flex, Abril_Fatface, Marck_Script, Luxurious_Script, Luxurious_Roman, Cinzel, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";


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

const luxuryScript = Luxurious_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-luxury-script",
});

const luxuryRoman = Luxurious_Roman({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-luxury-roman",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Rahim Rehman",
  description: "Rahim Rehman Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${robotoFlex.variable} ${abrilFatface.variable} ${marckScript.variable} ${luxuryScript.variable} ${luxuryRoman.variable} ${cinzel.variable} ${poppins.variable}  bg-[#000000] text-white antialiased overflow-x-hidden`}
      >
        <div className="relative">
          <div className="xl:block hidden absolute xl:top-40 lg:top-30  right-0  h-[600px] w-[600px] bg-[radial-gradient(circle,#072340_0%,transparent_100%)] opacity-40 blur-2xl rounded-full  overflow-x-hidden"></div>
          <ScrollToTop />
          <Navbar />
          <main className="">
            {children}
          </main>
         
        </div>
      </body>
    </html>
  );
}
