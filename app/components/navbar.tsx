'use client'

import { navLinks } from "@/app/constants";
import Image from "next/image";

const Navbar = () => {
    return (
        <header>
            <nav>
                <div className="size-8 aspect-square relative">
                    <Image src="/logo.svg" alt="Logo" fill priority />
                </div>
                <ul>
                    {navLinks.map(({ label }) => (
                        <li key={label}>
                            <a href={label}>{label}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex-center gap-3">
                    <button>
                        <Image src="/search.svg" alt="Search" width={20} height={20} />
                    </button>
                    <button>
                        <Image src="/cart.svg" alt="Cart" width={20} height={20} />
                    </button>
                </div>
            </nav>
        </header>
    )
};

export default Navbar;
