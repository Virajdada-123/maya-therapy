"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5e1d8] bg-[#fffdf9]/95 backdrop-blur">
    <nav className="mx-auto max-w-7xl px-6">

    <div className="flex h-[82px] items-center justify-between">

     {/* Logo */}
       <a
        href="/"
        onClick={closeMenu}
        className="text-lg font-medium tracking-tight text-[#18221e] md:text-xl"
        >
         Dr. Maya Reynolds, PsyD
      </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            <a
              href="#about"
              className="text-sm text-[#52605a] transition-colors hover:text-[#18221e]"
            >
              About
            </a>

            <a
              href="#specialties"
              className="text-sm text-[#52605a] transition-colors hover:text-[#18221e]"
            >
              Specialties
            </a>

            <a
              href="#approach"
              className="text-sm text-[#52605a] transition-colors hover:text-[#18221e]"
            >
              Approach
            </a>

            <a
              href="#office"
              className="text-sm text-[#52605a] transition-colors hover:text-[#18221e]"
            >
              Our Office
            </a>

            <a
              href="#contact"
              className="text-sm text-[#52605a] transition-colors hover:text-[#18221e]"
            >
              Contact
            </a>

            <a
              href="#contact"
              className="rounded-full bg-[#18221e] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2d3b34]"
            >
              Schedule a Consultation
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8d3c9] text-[#18221e] lg:hidden"
          >
            <span className="text-xl">{isOpen ? "×" : "☰"}</span>
          </button>

        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="border-t border-[#e5e1d8] py-6 lg:hidden">
            <div className="flex flex-col gap-5">

              <a
                href="#about"
                onClick={closeMenu}
                className="text-base text-[#52605a]"
              >
                About
              </a>

              <a
                href="#specialties"
                onClick={closeMenu}
                className="text-base text-[#52605a]"
              >
                Specialties
              </a>

              <a
                href="#approach"
                onClick={closeMenu}
                className="text-base text-[#52605a]"
              >
                Approach
              </a>

              <a
                href="#office"
                onClick={closeMenu}
                className="text-base text-[#52605a]"
              >
                Our Office
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="text-base text-[#52605a]"
              >
                Contact
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 inline-flex w-fit rounded-full bg-[#18221e] px-6 py-3 text-sm font-medium text-white"
              >
                Schedule a Consultation
              </a>

            </div>
          </div>
        )}

      </nav>
    </header>
  );
}