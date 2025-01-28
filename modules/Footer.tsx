import Container from "@/components/Container"
import Logo from "@/components/Logo"
import { BsFacebook, BsInstagram } from "react-icons/bs"


const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white py-6 md:py-12
     border-t-1 border-neutral-700">
    <Container>
        <div className="flex flex-col md:flex-row  px-6 justify-between items-center  gap-3 ">
            
            <Logo/>
            <p className="text-xs md:text-sm text-neutral-400 font-semibold ">
                &copy; {new Date().getFullYear()} Nbg Construction. All rights reserved.
            </p>
            <div className="flex gap-4">
                <a
                  href="#" target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram />
                </a>
                <a
                  href="#" target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFacebook />
                </a>
                
            </div>
        </div>
    </Container>

        
    </footer>
  )
}

export default Footer