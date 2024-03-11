"use client";

import Link from "next/link";

const NavlinkLarge = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link href={href} className="border-b-2 border-transparent hover:border-white transition ease-in-out duration-200">
      {children}
    </Link>
  );
};

export default NavlinkLarge;
