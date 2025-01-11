import Container from "@/components/Container";
import SectionName from "@/components/SectionName";

export default function AboutUs() {
  return (
    <section className="">
      <Container>
        <SectionName name="About Us" />
        <div className="grid grid-cols-1 md:grid-cols-2 px-3 gap-4 md:gap-8 mb-2">
          <strong className=" p-5 font-medium text-xl md:text-2xl border-l-4 border-l-primary">
            {" "}
            OUR TEAM IS READY TO BUILD YOUR DREAMS
          </strong>
          <p className="text-clamp text-slate-700 p-2 md:p-5 leading-7 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            totam, nesciunt tempora natus culpa repellendus necessitatibus
            temporibus neque illo aliquam enim deserunt eum labore praesentium
            voluptatum perferendis quam! Beatae, quis?
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"></div>
          <video
            src="/home_video.mp4"
            muted
            autoPlay
            loop
            className="object-cover h-[200px] md:h-[450px] w-full"
          />
        </div>
      </Container>
      <div className=" px-3 md:px-12 grid grid-cols-2 md:grid-cols-4 justify-center gap-4 md:gap-6 mt-2">
        {data.map((item) => (
          <div key={item.title} className="text-center p-3">
            <h3 className="mb-2 text-primary">{item.title}</h3>
            <p className="text-sm  text-zinc-500 font-semibold">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const data = [
  {
    title: "8+",
    description: "years of experience",
  },
  {
    title: "50+",
    description: "Projects Completed",
  },
  {
    title: "100+",
    description: "Happy Customers",
  },
  {
    title: "70+",
    description: "5-Star google reviews",
  },
];
