import Image from "next/image";
import Banner from "./banner.js/page";
import About from "./about/page";
import MyProfession from "./myprofession/page";
import Toolbox from "./components/Toolbox";
import Skills from "./components/Skills";
import Stats from "./components/Stats";
import Philosophy from "./components/Philosophy";
import RecentWork from "./components/RecentWork";
import DiveDeep from "./components/DiveDeep";
import Feedback from "./components/Feedback";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <MyProfession />
      <Toolbox />
      <Skills />
      <Stats />
      <RecentWork />
      <DiveDeep />
      <Feedback />
      <Philosophy />
      <Contact />
    </main>
  );
}
