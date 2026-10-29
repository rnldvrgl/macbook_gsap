import Hero from "@/app/components/hero";
import Navbar from "@/app/components/navbar";
import ProductViewer from "@/app/components/product_viewer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <ProductViewer />
        </>
    );
}
