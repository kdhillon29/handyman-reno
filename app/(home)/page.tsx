import SectionSplit from "@/components/SectionSplit";
import AboutUs from "./modules/AboutUs";
import CoreValues from "./modules/CoreValues";
import Hero from "./modules/Hero";
import Services from "@/modules/Services";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <CoreValues />
      <SectionSplit>
        <AboutUs />
        <Services />
      </SectionSplit>
    </div>
  );
}
