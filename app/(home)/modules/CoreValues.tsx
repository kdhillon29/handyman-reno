import Image from 'next/image';

export default function CoreValues() {
  return (
    <section className="bg-neutral-900 text-white mt-[-10px]">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {coreValues.map((item, index) => {
          const secondItem = index === 1;
          return (
            <div
              key={item.title}
              className={`flex flex-col items-center 
             p-4 ${secondItem && 'bg-primary text-black'}`}
            >
              <div className="flex flex-col items-center gap-2 md:gap-3 p-1 md:p3 text-center">
                <div
                  className={`w-20 h-20 border-2 rounded-full flex items-center justify-center ${
                    secondItem ? 'border-black' : 'border-white'
                  }`}
                >
                  <Image src={item.img} alt="icon" width={34} height={34} />
                </div>
                <h3>{item.title}</h3>
                <p className="max-w-md text-xs md:text-sm">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const coreValues = [
  {
    img: '/excellence.png',
    title: 'Excellence',
    description:
      'We strive to deliver high-quality services with unwavering commitment,ensuring exceptional outcomes that stand the test of time',
  },
  {
    img: '/innovation.png',
    title: 'Innovation',
    description:
      'Embracing cutting-edge Technologies and creative solutions to deliver modern and sustainable outcome',
  },
  {
    img: '/customer.png',
    title: 'Customer Focus',
    description:
      'Building strong relationships  through clear communication ,personalized services and relentless dedication to meet our client unique needs.',
  },
];
