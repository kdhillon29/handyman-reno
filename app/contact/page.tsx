"use client"

import Banner from "@/modules/Banner";

import ContactUs from "@/modules/ContactUs/ContactUs";
// import Map from "@/modules/Map";
import dynamic from "next/dynamic";


const DynamicMap = dynamic(() => import("@/modules/Map"), { ssr: false });

export default function Contact () {
    return (
        <>
        <Banner />
        <ContactUs/>
        <DynamicMap />
        </>
    )
}