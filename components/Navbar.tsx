"use client";

import brand from "@/public/images/ignite-flame.png";
import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import NavlinkLarge from "./ui/NavlinkLarge";

const Navbar = () => {
  //  Hooks
  const [navOpen, setNavOpen] = useState(false);

  //  Handlers
  const handleNavOpen = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className={`p-4 text-white gap-4 shadow-xl ${navOpen ? "h-full" : ""}`} style={{ backgroundColor: "#231139" }}>
      <div className="flex items-center justify-between lg:w-2/3 lg:mx-auto">

        {/* Brand */}
        <Link href="#" className="flex items-center gap-1 select-none">
          <div className="relative w-8 aspect-[1/1]">
            <Image src={brand.src} alt="" fill style={{ objectFit: "contain" }} />
          </div>
          <div className="text-xs">
            <p className="font-semibold">ignite</p>
            <p>solutions</p>
          </div>
        </Link>

        {/* Links */}
        <div className="hidden lg:flex gap-16 items-center">
          <NavlinkLarge href="#">Dashboard</NavlinkLarge>
          <NavlinkLarge href="#">Setup</NavlinkLarge>
          <NavlinkLarge href="#">Report</NavlinkLarge>
          <NavlinkLarge href="#">Collaborate</NavlinkLarge>
          <NavlinkLarge href="#">Help</NavlinkLarge>
        </div>

        {/* Mobile Hamburger */}
        <Button variant="ghost" onClick={handleNavOpen} className="lg:hidden p-0">
          <MenuIcon size={32} />
        </Button>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="mt-4 flex flex-col text-right gap-8 p-4">
          <Link href="#">Dashboard</Link>
          <Link href="#">Setup</Link>
          <Link href="#">Report</Link>
          <Link href="#">Collaborate</Link>
          <Link href="#">Help</Link>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
