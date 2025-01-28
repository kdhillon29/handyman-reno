import BreadCrumbs from "@/components/BreadCrumbs";
import Container from "@/components/Container";
import Overlay from "@/components/Overlay";
import Image from "next/image";

export default function Banner() {
    return (
        <div className=" relative w-full h-[260px] md:h-[300px]">
            <Image
            src="/hero2.jpg"
            alt="banner"
            fill
            className="object-cover md:object-center"
            />
            <Overlay />
            <div className="absolute left-1 bottom-4   w-full h-auto text-white">
                <Container>
                    <BreadCrumbs />
                </Container>
            </div>
        </div>
    )
}