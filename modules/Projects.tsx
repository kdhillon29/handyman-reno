import EmblaCarousel from "@/components/Carousel/EmblaCarousel";
import Container from "@/components/Container";
import SectionName from "@/components/SectionName";

export default function Projects() {
  // const carouselImages = ["/hero2.jpg", "/hero3.jpg", "/hero4.jpg"];
  const data=[{
    image: '/projects/deck_flooring.jpg',
    title: "Outdoor Deck Installation",
    link: "#",

  },
  {
    image: '/projects/bathroom_renovation.jpg',
    title: "Bathroom Renovation",
    link: "#",

  },
  {
    image: '/projects/bathroom_vanity.jpg',
    title: "Bathroom Vanity",
    link: "#",

  },
  {
    image: '/projects/garage_flooring.jpg',
    title: "Garage Flooring",
    link: "#",
  },
   {
    image: '/projects/steel_framing.jpg',
    title: "Steel Framing",
    link: "#",
  }
]
  return (
    <section className="">
      <Container>
        <SectionName name="projects" />
        <EmblaCarousel slides={data} />
      </Container>
    </section>
  );
}
