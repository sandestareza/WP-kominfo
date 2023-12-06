import { Navbar } from "flowbite-react";

import Logo from "../assets/logo.png";

function NavbarWeb() {
    return (
        <Navbar className="bg-white border-gray-200 z-10 w-full">
            <Navbar.Brand href="https://flowbite-react.com">
                <img
                    src={Logo}
                    className="mr-3 h-14"
                    alt="kominfo Logo"
                />
                <div className="flex flex-col gap-y-1">
                    <span className="text-left text-md font-semibold text-[#016ABF]">
                        Koperasi
                    </span>
                    <span className="text-left text-sm font-semibold">
                        Kota Palembang
                    </span>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href="#" className="text-[#171717CC] hover:text-[#171717]">
                    Beranda
                </Navbar.Link>
                <Navbar.Link href="#" className="text-[#171717CC] hover:text-[#171717]">Profil</Navbar.Link>
                <Navbar.Link href="#" className="text-[#171717CC] hover:text-[#171717]">Berita</Navbar.Link>
                <Navbar.Link href="#" className="text-[#171717CC] hover:text-[#171717]">Bidang</Navbar.Link>
                <Navbar.Link href="#" className="text-[#171717CC] hover:text-[#171717]">Galeri</Navbar.Link>
                <Navbar.Link href="#" className="text-[#171717CC] hover:text-[#171717]">Survey Kepuasan</Navbar.Link>
                <Navbar.Link href="#" className="text-[#171717CC]">Informasi</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarWeb;
