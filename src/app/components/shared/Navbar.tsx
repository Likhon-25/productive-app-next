import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";

const links = (
  <>
    <li>
      <Link
        href="/"
        className="text-sm font-medium text-gray-600 transition hover:text-[#23BE0A]"
      >
        Home
      </Link>
    </li>

    <li>
      <Link
        href="/apps"
        className="text-sm font-medium text-gray-600 transition hover:text-[#23BE0A]"
      >
        Apps
      </Link>
    </li>

    <li>
      <Link
        href="/installed"
        className="text-sm font-medium text-gray-600 transition hover:text-[#23BE0A]"
      >
        Installation
      </Link>
    </li>
  </>
);

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="container mx-auto px-4">
        <nav className="flex h-20 items-center justify-between">
          {/* Logo + Company Name */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={logo}
              alt="AppNest Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
              priority
            />

            <span className="text-xl font-bold tracking-tight text-[#131313]">
              App<span className="text-[#23BE0A]">Nest</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <ul className="hidden items-center gap-8 md:flex">
            {links}
          </ul>

          {/* Registration */}
          <Link
            href="/registration"
            className="rounded-xl bg-[#23BE0A] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1fa308] hover:shadow-md"
          >
            Contribute
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;