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
import ProfessionalJourney from "./components/ProfessionalJourney";
import RahimIntriduce from "./components/RahimIntriduce";

export default function Home() {
  return (
    <main>
      <Banner />
      <MyProfession />
      <RahimIntriduce />
      <ProfessionalJourney />
      {/* <About /> */}
      <Toolbox />
      <Skills />
      <Stats />
      {/* <Philosophy /> */}
      <RecentWork />
      <DiveDeep />
      <Feedback />
      <Contact />
    </main>
  );
}
