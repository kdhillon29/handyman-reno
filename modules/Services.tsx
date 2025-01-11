import Container from "@/components/Container";
import SectionName from "@/components/SectionName";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function Services() {
  return (
    <Container>
      <SectionName name="Services" />
      <div className="grid grid-cols-1 md:grid-cols-3 text-white">
        {servicesData.map((item, index) => {
          const isSecond = index == 1;
          return (
            <div
              key={item.title}
              className={`flex flex-col gap-2 justify-between p-2 md:p-4 space-y-4 ${
                isSecond ? "bg-white text-black" : "bg-primary text-white"
              }`}
            >
              <h3> 0{index + 1}</h3>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="flex justify-between">
                <Link
                  href={item.href}
                  className={`border-2 ${
                    isSecond ? "border-black" : "border-white"
                  } p-2 inline-block`}
                >
                  <FaArrowRight size={24} />
                </Link>

                <div
                  className={`relative rounded-lg w-16 h-full 
                
                border-2  ${
                  isSecond
                    ? "bg-primary border-primary"
                    : "bg-white border-white"
                }`}
                >
                  <div
                    className={`absolute w-full h-full right-2 
                bottom-2 ${isSecond ? "bg-white" : "bg-primary"}`}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

const servicesData = [
  {
    title: "General Contracting",
    href: "/services/general-contracting",
    description:
      "We offer a full range of general contracting services including commercial and residential construction work,general building maintaince and handyman services.Our services includes quality work,warranty and value for money.",
  },
  {
    title: "Renovation and Resoration",
    href: "/services/renovation-resoration",
    description:
      "We  specialize in all types of building renovation and restoration services include tiling, bathroom restoration and commercial renovations.",
  },
  {
    title: "Monolithic Construction",
    href: "/services/monolith-construction",
    description:
      "We specialize in all monolithic construction  including home and office buildings.",
  },
];
