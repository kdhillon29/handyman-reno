import Button from "@/components/Button";
import Container from "@/components/Container";
import SectionName from "@/components/SectionName";

import Image from "next/image";
export default function Carrer() {
  return (
    <section>
      <Container>
        <SectionName name="carrer" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="mb-4">Join Our Team</h2>
            <Image
              src="/worker.jpg"
              alt="worker"
              sizes="100vw"
              width={0}
              height={0}
              className="h-auto w-full mb-4 md:hidden"
            />
            <div className="space-y-4">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem deserunt aliquam et quasi, similique ipsa cum. Odio
                vero aperiam culpa!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                reprehenderit commodi adipisci repellendus voluptate quis
                impedit dolore iste nemo ab, nihil error, numquam itaque
                veritatis modi autem voluptatum, illo omnis?
              </p>
              <Button />
            </div>
          </div>
          <div className="relative hidden md:block">
            <Image
              src="/worker.jpg"
              alt="worker"
              sizes="100vw"
              width={0}
              height={0}
              className="h-auto w-full "
            />
            <Image
              src="/dots.png"
              alt="dots"
              width={200}
              height={200}
              className="absolute left-0 bottom-0 transform translate-x-1/2 translate-y-1/2"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
