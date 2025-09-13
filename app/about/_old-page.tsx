import Container from '@/components/Container';
import SectionSplit from '@/components/SectionSplit';
import Banner from '@/modules/Banner';
import CompanyHistory from './modules/CompanyHistory';
import Employees from './modules/Employees';
import OurVision from './modules/OurVision';
import Certificates from './modules/Certificates';
import Link from 'next/link';
import CoreValues from '../(home)/modules/CoreValues';

export default function About() {
  return (
    <>
      <Banner />
      {/* <SectionSplit>
        <Container className='px-2 md:px-12 animate-fade-in delay-100 '>
          <h2 className="mb-6">About Us</h2>
          <div className="grid place-content-center grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 md:gap-8 relative min-h-screen">
            <div className="space-y-4">
              <CompanyHistory />
              <Employees />
              <OurVision />
              <Certificates />
            </div>
            <div className='relative ml-12 '>

                <div className='sticky top-16'>
                    <ul className="hidden md:block space-y-2">

                        {links.map((link)=>(
                            <li key={link.name} className=" flex items-center gap-2">

                           <span className='w-8 h-1 bg-primary'/>
                           <Link href={link.href}>{link.name}</Link>    

                            </li>
                        ))}

                    </ul>

                </div>

            </div>
          </div>
        </Container>
      </SectionSplit> */}
      <CoreValues />
    </>
  );
}

const links = [
  {
    href: '#company-history',
    name: 'Company History',
  },
  {
    href: '#employees',
    name: 'Employees',
  },
  {
    href: '#our-vision',
    name: 'Our Vision',
  },
  {
    href: '#certificates',
    name: 'Certificates',
  },
];
