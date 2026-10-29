"use client"
import useMacbookStore from "@/app/store";
import { Canvas } from "@react-three/fiber";
import { clsx } from "clsx";
import StudioLights from "@/app/components/studio_lights";
import ModelSwitcher from "@/app/components/three/ModelSwitcher";
import { useMediaQuery } from "react-responsive";
import { macbookColors, macbookSizes } from "@/app/constants";

const ProductViewer = () => {
    const { color, scale, setColor, setScale } = useMacbookStore();
    const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
    return (
        <section id="product-viewer">
            <h2>Take a closer look.</h2>
            <div className="controls">
                <p className="info text-center">Macbook Pro in {macbookColors.find((c) => c.value === color)?.name} and {macbookSizes.find((s) => s.value === scale)?.name} size.</p>
                <div className="flex-center gap-5 mt-5">
                    <div className="color-control">
                        {macbookColors.map((colorOption) => (
                            <div
                                key={colorOption.id}
                                onClick={() => setColor(colorOption.value)}
                                className={clsx(color === colorOption.value && 'active')}
                                style={{ backgroundColor: colorOption.value }}
                            />
                        ))}
                    </div>
                    <div className="size-control">
                        {macbookSizes.map((sizeOption) => (
                            <div
                                key={sizeOption.id}
                                onClick={() => setScale(sizeOption.value)}
                                className={clsx(scale === sizeOption.value ? 'bg-white text-black' : 'bg-transparent text-white')}
                            >
                                <p>{sizeOption.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Canvas id="canvas" camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}>
                <StudioLights />
                <ModelSwitcher scale={isMobile ? scale - 0.03 : scale} isMobile={isMobile} />
            </Canvas>
        </section>
    );
};

export default ProductViewer;
