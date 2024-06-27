'use client'

import Image from "next/image";
import Container from "../Container";
import { useRouter } from "next/navigation";

const NavBar: React.FC = () => {
    const router = useRouter();

    return (
        <div className="sticky top-0 border border-b-2">
            <Container>
                <div className="flex items-center justify-between py-0">
                    <div className="flex items-center space-x-0.5 cursor-pointer font-semibold" onClick={() => router.push('/')}>
                        <Image src='/SINC1.png' alt="logo" width={100} height={30} />
                        <NavLink text="About" link="/about" />
                        <NavLink text="SIP" link="/sip" />
                        <NavLink text="Studio" link="/studio" />
                        <NavLink text="SEEQ" link="/seeq" />
                        <NavLink text="Platforms" link="/platforms" />
                        <NavLink text="Initiatives" link="/initiatives" />
                        <NavLink text="More..." link="/more" />
                    </div>
                    <div className="ml-auto flex items-center space-x-4">
                        <button
                            className="bg-cyan-500 text-white px-4 py-2 rounded-full transition-colors duration-300 ease-in-out hover:bg-blue-700"
                            onClick={() => router.push('/some-page')}
                        >
                            SINC With Us
                        </button>
                        <button
                            className="bg-stone-800 text-white px-4 py-2 rounded-full transition-colors duration-300 ease-in-out hover:bg-gray-900"
                            onClick={() => router.push('/some-page')}
                        >
                            Apply to SIP1.0
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

interface NavLinkProps {
    text: string;
    link: string;
}

const NavLink: React.FC<NavLinkProps> = ({ text, link }) => {
    const router = useRouter();

    return (
        <button
            className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
            onClick={() => router.push(link)}
        >
            {text}
        </button>
    );
};

export default NavBar;
