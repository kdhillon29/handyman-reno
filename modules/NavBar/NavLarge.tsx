'use client';
import Logo from "@/components/Logo";
import { useEffect, useState } from "react";
import NavMenu from "./NavMenu";
import Container from "@/components/Container";

export default function NavLarge() {
    const [isScroll, setIsScroll] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={`hidden md:block fixed top-0 
        w-full right-0 left-0 z-50
         transition-all duration-300
         ${isScroll ? 'bg-neutral-200/60 text-black backdrop-blur-md' : ' bg-transparent text-white'}
         `}>
            <Container>
                <div className="flex items-center justify-between h-16">
                    <Logo />
                    <NavMenu />
                </div>
            </Container>
            
        </div>
    );
}