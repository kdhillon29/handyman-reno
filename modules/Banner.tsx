import Container from "@/components/Container";
import Overlay from "@/components/Overlay";
import Image from "next/image";

export default function Banner() {
    return (
        <div className=" relative w-full h-[230px] md:h-[300px]">
            <Image
            src="/hero2.jpg"
            alt="banner"
            fill
            className="object-cover"
            />
            <Overlay />
            <div className="absolute left-0 bottom-4 w-full h-auto text-white">
                <Container>
                    <p>breadcrumb</p>
                </Container>
            </div>
        </div>
    )
}