import { Route } from "@/types/route";
import Link from "next/link";
import { GrContact, GrInfo } from "react-icons/gr";

export  default function NavMenu(){

    return (
        <ul className=" flex space-y-2 md:space-y-0 md:space-x-4 flex-col md:flex-row">
            {links.map((link)=>(
                <li key={link.text} className=" flex items-center gap-2 hover:text-primary text-xl font-medium">
                   <link.icon size={14} className='text-primary'/>
                   <Link href={link.href}>{link.text}</Link>    
                </li>
            ))}
        </ul>
    )
    
}
const links = [
    {
     href:Route.ABOUT,
     text:'About Us',
     icon:GrInfo
    },
    {
        href:Route.CONTACT,
        text:'Contact Us',
        icon:GrContact
       },
]