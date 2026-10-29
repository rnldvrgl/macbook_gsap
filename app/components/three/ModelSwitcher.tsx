import MacbookModel14 from "@/app/components/models/Macbook-14";
import MacbookModel16 from "@/app/components/models/Macbook-16";
import { PresentationControlProps, PresentationControls } from "@react-three/drei";
import { useRef } from "react";
import { Group, MeshLambertMaterial, Object3D } from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMeshes = (group: Group, opacity: number) => {
    if (!group) return;

    group.traverse((child: any) => {
        if (child.isMesh) {
            child.material.transparent = true;
            gsap.to(child.material, {
                opacity, duration: ANIMATION_DURATION
            })
        }
    })
}

const moveGroup = (group: Group, x: number) => {
    if (!group) return;

    gsap.to(group.position, {
        x, duration: ANIMATION_DURATION
    })
}

const ModelSwitcher = ({ scale, isMobile }: { scale: number; isMobile: boolean }) => {
    const smallMacbookRef = useRef<Group>(null);
    const largeMacbookRef = useRef<Group>(null);
    const showLargeMacbook = scale === 0.08 || scale === 0.05;
    useGSAP(() => {
        if (showLargeMacbook) {
            moveGroup(smallMacbookRef.current!, -OFFSET_DISTANCE);
            moveGroup(largeMacbookRef.current!, 0);
            fadeMeshes(smallMacbookRef.current!, 0);
            fadeMeshes(largeMacbookRef.current!, 1);
        } else {
            moveGroup(smallMacbookRef.current!, 0);
            moveGroup(largeMacbookRef.current!, OFFSET_DISTANCE);
            fadeMeshes(smallMacbookRef.current!, 1);
            fadeMeshes(largeMacbookRef.current!, 0);
        }

    }, [scale])

    const controlsConfig: PresentationControlProps = {
        snap: true,
        speed: 1,
        zoom: 1,
        azimuth: [-Infinity, Infinity],
        damping: 0.2,
        enabled: true,
        global: true,
    }

    return (
        <>
            <PresentationControls {...controlsConfig}>
                <group ref={largeMacbookRef}>
                    <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
                </group>
            </PresentationControls>

            <PresentationControls {...controlsConfig}>
                <group ref={smallMacbookRef}>
                    <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
                </group>
            </PresentationControls>
        </>
    );
};

export default ModelSwitcher;
