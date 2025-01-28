import SectionName from '@/components/SectionName';
import Image from 'next/image';

export default function Certificates() {
  return (
    <div className='text-clamp'>
      <SectionName name="Certificates" id="certificates" />
      <p className=' mb-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores illo fugiat esse
        cupiditate, suscipit quod eaque qui corporis porro perspiciatis?Lorem ipsum dolor sit 
        amet consectetur adipisicing elit. Consequatur eaqueut nesciunt blanditiis illo 
        reprehenderit voluptate corrupti voluptas numquam adipisci!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-8">
        <div className="flex items-center justify-center">
          <Image
            src="/certificate.jpg"
            alt="certificates"
            width={160}
            height={160}
            className="rounded-full  overflow-hidden"
          />
        </div>

        <div>
          <Image
            src="/certificate2.png"
            alt="certificates"
            sizes="100vw"
            width={0}
            height={0}
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}
