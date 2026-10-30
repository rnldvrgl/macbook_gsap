import Hero from "@/app/components/hero";
import Navbar from "@/app/components/navbar";
import ProductViewer from "@/app/components/product_viewer";
import Showcase from "@/app/components/showcase";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Home() {
    gsap.registerPlugin(ScrollTrigger);
    return (
        <>
            <Navbar />
            <Hero />
            <ProductViewer />
            <Showcase />
        </>
    );
}
