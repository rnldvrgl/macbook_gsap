import { MediaHTMLAttributes, Ref } from "react";

type VideoProps = {
    ref?: Ref<HTMLVideoElement>;
    src: string;
    poster?: string;
    className?: string;
    options?: MediaHTMLAttributes<HTMLVideoElement>;
};

export function Video({ ref, src, poster, className, options }: VideoProps) {
    return (
        <video
            ref={ref}
            poster={poster}
            preload="metadata"
            className={className}
            {...options}
        >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}
