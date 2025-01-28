import Container from "@/components/Container"
import Logo from "@/components/Logo"


const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-6 md:py-12
     border-t-1 border-neutral-700">
    <Container>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-3">
            
            <Logo/>
            <p className="text-xs text-neutral-400 font-semibold ">
                &copy; {new Date().getFullYear()} Nbg Construction. All rights reserved.
            </p>
            <div className="flex gap-4">
                
            </div>
        </div>
    </Container>

        
    </footer>
  )
}

export default Footer