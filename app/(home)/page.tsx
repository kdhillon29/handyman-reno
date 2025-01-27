import SectionSplit from "@/components/SectionSplit";
import AboutUs from "./modules/AboutUs";
import CoreValues from "./modules/CoreValues";
import Hero from "./modules/Hero";
import Services from "@/modules/Services";
import Projects from "@/modules/Projects";
import Carrer from "./modules/Carrer";

import ContactUs from "@/modules/ContactUs";

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
        <ContactUs />
      </SectionSplit>
    </div>
  );
}
