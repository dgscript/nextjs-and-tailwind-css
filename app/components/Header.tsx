"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-white shadow-lg shadow-gray-300 relative max">
      <div className="flex justify-between items-center py-4 px-3 max-w-7xl m-auto">
        <h1 className="text-black text-3xl max-sm:text-2xl max-[23.375rem]:text-[1.2rem]">
          <span className="font-bold">Next.js</span> and{" "}
          <span className="text-[#1EC3D1]">Tailwind CSS</span>
        </h1>

        <nav
          className={`flex max-sm:absolute max-sm:bg-white max-sm:top-full max-sm:left-0 max-sm:flex-col max-sm:w-full max-sm:p-5 max-sm:gap-3 max-sm:shadow-lg sm:flex ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          <Link
            className=" p-2 bg-[#1EC3D1] text-white rounded-md hover:bg-white border-1 border-[#1EC3D1] hover:text-black transition hover:border-black"
            href="/"
          >
            Home
          </Link>
          <Link
            className={`nav-link ${
              pathname === "/learning" ? "font-semibold" : ""
            }`}
            href="/learning"
          >
            Learning
          </Link>
          <Link
            className={`nav-link ${
              pathname === "/blog" ? "font-semibold" : ""
            }`}
            href="/blog"
          >
            Blog
          </Link>
        </nav>
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          className="sm:hidden"
        >
          {/* open menu button */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="#1EC3D1"
            className={`w-8 h-8 ${isMenuOpen ? "hidden" : ""}`}
          >
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>

          {/* close button */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            fill="#1EC3D1"
            className={`w-8 h-8 ${isMenuOpen ? "" : "hidden"}`}
          >
            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
          </svg>
        </button>
      </div>
    </header>
  );
}
