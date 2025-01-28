import EmblaCarousel from "@/components/Carousel/EmblaCarousel";
import Container from "@/components/Container";
import SectionName from "@/components/SectionName";

export default function Projects() {
  // const carouselImages = ["/hero2.jpg", "/hero3.jpg", "/hero4.jpg"];
  const data=[{
    image: "/hero2.jpg",
    title: "Project 1",
    link: "#",

  },
  {
    image: "/hero3.jpg",
    title: "Project 2",
    link: "#",

  },
  {
    image: "/hero4.jpg",
    title: "Project 3",
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
