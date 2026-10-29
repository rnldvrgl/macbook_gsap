import { navLinks } from "@/app/constants";
import Image from "next/image";

const Navbar = () => {
    return (
        <header>
            <nav>
                <Image src="/logo.svg" alt="Logo" width={30} height={30} priority />
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
