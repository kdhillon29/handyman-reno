import { Route } from "@/types/route";
import Link from "next/link";
import { GrContact, GrHome, GrInfo } from "react-icons/gr";

  interface LinksProps { 
    handleClick?:() => void;
}

export  default function NavMenu({handleClick}:LinksProps){

    return (
        <ul className=" flex space-y-3 md:space-y-0 md:space-x-4 flex-col md:flex-row">
            {links.map((link)=>(
                <li key={link.text} >
                   <Link href={link.href} onClick={handleClick} className=" flex items-center gap-2 hover:text-primary text-xl font-medium" >
                   <link.icon size={14} className='text-primary'/>
                      <p>{link.text}</p> 
                   
                   </Link>    
                </li>
            ))}
        </ul>
    )
    
}
const links = [
    {
     href:Route.HOME,
     text:'Home',
     icon:GrHome
    },
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