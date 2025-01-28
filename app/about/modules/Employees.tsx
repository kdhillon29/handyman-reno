import SectionName from '@/components/SectionName';
import Image from 'next/image';

export default function Employees() {
  return (
    <div>
      <SectionName name="Employees" id="employees" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 text-clamp">
        {employeesData.map(person => (
          <div key={person.name}>
            <div className="relative h-96 md:h-52">
              <Image src={person.image} alt={person.name} fill className="object-cover" />
            </div>
            <h5 className="mt-1">{person.name}</h5>
            <p>{person.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const employeesData = [
  { image: '/person1.jpg', name: 'Gagan Sumal', position: 'Construction Manager' },
  { image: '/person2.jpg', name: 'Bob Johnson', position: 'Construction Worker' },
  { image: '/person3.jpg', name: 'Alice Williams', position: 'Operations Manager' },
  { image: '/person4.jpg', name: 'Charlie Brown', position: 'HR Manager' },
];
