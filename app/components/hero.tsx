'use client'

import { Video } from "@/app/components/video";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Hero = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2;
        }
    }, []);

    return (
        <section id="hero">
            <div className="w-full relative">
                <h1>MacBook Pro</h1>
                <Image
                    src="/title.png"
                    alt="MacBook Title"
                    width={1200}
                    height={300}
                    priority
                />
            </div>

            <Video
                ref={videoRef}
                src="/videos/hero.mp4"
                className="w-full h-auto"
                options={{ autoPlay: true, muted: true, playsInline: true, loop: true }}
            />
            <button>Buy</button>
            <p>From $1,299.00 or $54.12/mo. for 24 mo.</p>
        </section>
    );
};

export default Hero;
