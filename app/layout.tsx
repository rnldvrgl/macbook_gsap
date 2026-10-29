import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "MacBook Pro",
    description: "A MacBook Pro landing page built with Next.js, React Three Fiber, and GSAP.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
        >
            <body className="flex-center flex-col">
                {children}
            </body>
        </html>
    );
}
