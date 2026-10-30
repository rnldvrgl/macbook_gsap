"use client"
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

// The mask starts zoomed in so far that only the inside of the M4 cut-out
// (the video) is visible, then shrinks down to reveal the full logo.
const MASK_START_SCALE = 80;
const MASK_END_SCALE = 1.1;

// Linear interpolation from 80 -> 1.1 looks static for most of the scroll and
// then snaps at the end. Interpolating geometrically keeps the perceived zoom
// speed constant across the whole scroll.
const maskZoomEase = (progress: number) =>
    (MASK_START_SCALE - MASK_START_SCALE * Math.pow(MASK_END_SCALE / MASK_START_SCALE, progress)) /
    (MASK_START_SCALE - MASK_END_SCALE);

const Showcase = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        if (!isTablet) {
            // Pin only the video + mask while the logo zooms out, so the content
            // below scrolls in naturally once the pin is released.
            gsap.fromTo('.mask img',
                { scale: MASK_START_SCALE },
                {
                    scale: MASK_END_SCALE,
                    ease: maskZoomEase,
                    scrollTrigger: {
                        trigger: '.media',
                        start: 'top top',
                        end: '+=150%',
                        scrub: 1,
                        pin: true,
                    }
                });

            gsap.fromTo('.content',
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: '.content',
                        start: 'top 90%',
                        end: 'top 50%',
                        scrub: 1,
                    }
                });
        }
    }, { dependencies: [isTablet], scope: sectionRef });

    return (
        <section id="showcase" ref={sectionRef}>
            <div className="media">
                <video
                    src="/videos/game.mp4"
                    loop
                    muted
                    autoPlay
                    playsInline
                    // The video has no height until its metadata loads, which shifts
                    // every trigger position below it.
                    onLoadedMetadata={() => ScrollTrigger.refresh()}
                />
                <div className="mask">
                    <img src="/mask-logo.svg" />
                </div>
            </div>

            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">
                        <h2>Rocket Chip</h2>

                        <div className="space-y-5 mt-7 pe-10">
                            <p>
                                Introducing {" "}
                                <span className="text-white">
                                    M4, the next generation of Apple silicon
                                </span>
                                . M4 powers
                            </p>
                            <p>
                                It drives Apple Intelligence on iPad Pro, so you can write, create, and accomplish more with ease. All in a design that’s unbelievably thin, light, and powerful.
                            </p>
                            <p>
                                A brand-new display engine delivers breathtaking precision, color accuracy, and brightness. And a next-gen GPU with hardware-accelerated ray tracing brings console-level graphics to your fingertips.
                            </p>
                            <p className="text-primary">Learn more about Apple Intelligence</p>
                        </div>
                    </div>

                    <div className="max-w-3xs space-y-14">
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>4x faster</h3>
                            <p>pro rendering performance than M2</p>
                        </div>
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>1.5x faster</h3>
                            <p>CPU performance than M2</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Showcase
