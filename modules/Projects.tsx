import EmblaCarousel from "@/components/Carousel/EmblaCarousel";
import Container from "@/components/Container";
import SectionName from "@/components/SectionName";

export default function Projects() {
  const carouselImages = ["/hero2.jpg", "/hero3.jpg", "/hero4.jpg"];
  return (
    <section className="">
      <Container>
        <SectionName name="projects" />
        <EmblaCarousel slides={carouselImages} />
      </Container>
    </section>
  );
}
