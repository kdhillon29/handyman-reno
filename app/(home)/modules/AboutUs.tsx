import Container from "@/components/Container";
import SectionName from "@/components/SectionName";

export default function AboutUs() {
  return (
    <section className="">
      <Container>
        <SectionName name="About Us" />
        <div className="grid grid-cols-1 md:grid-cols-2 px-3 gap-2 md:gap-4 mb-2">
          <strong className=" p-2 font-medium text-xl md:text-2xl ">
            {" "}
            OUR TEAM IS READY TO BUILD YOUR DREAMS
          </strong>
          <p className="text-clamp text-slate-700 p-2 md:p-3 leading-6 tracking-tight text-justify">
           
           We are here to provide you full residential and commercial building maintenance services in reasonable price.
           we have the skills and experience to deliver high-quality results. We take the time to understand your needs and
           deliver the best results.<br/><br/>
           Our tasks include all types of building maintaince work, framing, cladding, maintaince work both interior and exterior,
           tiling, regrout, wall painting and gyprock installation.

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
      <div className=" px-3 bg-zinc-200/50 md:px-12 grid grid-cols-2 md:grid-cols-4 justify-center gap-2 md:gap-3 mt-2">
        {data.map((item) => (
          <div key={item.title} className="text-center p-2">
            <h3 className=" text-primary">{item.title}</h3>
            <p className="text-xs md:text-sm uppercase  text-zinc-500 font-semibold">
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
