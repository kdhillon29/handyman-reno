import SectionSplit from "@/components/SectionSplit";
import AboutUs from "./modules/AboutUs";
import CoreValues from "./modules/CoreValues";
import Hero from "./modules/Hero";
import Services from "@/modules/Services";
import Projects from "@/modules/Projects";
import Carrer from "./modules/Carrer";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <CoreValues />
      <SectionSplit>
        <AboutUs />
        <Services />
        <Projects />
        <Carrer />
      </SectionSplit>
    </div>
  );
}
