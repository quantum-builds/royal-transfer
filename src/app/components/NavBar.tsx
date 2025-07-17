"use client";
import Image from "next/image";
import { Logo } from "@/assets";
import { useState } from "react";

const NAVBAR_OPTIONS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Car Types",
    href: "#car-types",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Cities",
    href: "#cities",
  },
  {
    label: "About",
    href: "/about",
  },
];

export default function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50  backdrop-blur-sm py-2 px-6 lg:px-8">
      <div className="md:w-11/12 xl:10/12 mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={Logo} alt="logo-white" width={70} height={50} />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 be-vietnam-pro">
          {NAVBAR_OPTIONS.map((option, index) => (
            <div key={index} className="relative">
              <a
                href={option.href}
                className="text-white hover:text-yellow transition-colors duration-200 text-lg scroll-smooth"
              >
                {option.label}
              </a>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button (hidden on desktop) */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className="hidden md:block">
          <button className="bg-yellow text-white px-8 lg:px-6 xl:px-8 py-3 rounded-full w-fit cursor-pointer poppins ">
            Get in Touch
          </button>
        </div>
      </div>

      {/* Mobile Menu (shown when dropdown is open) */}
      {isDropdownOpen && (
        <div className="md:hidden bg-[#1A1346] mt-4 py-2 rounded-lg be-vietnam-pro">
          {NAVBAR_OPTIONS.map((option, index) => (
            <div key={index} className="px-4 py-2">
              <a
                href={option.href}
                className="block text-white hover:text-[#56aeff]"
              >
                {option.label}
              </a>
            </div>
          ))}
          <div className="px-4 py-2 mt-2">
            <button className="bg-yellow text-white px-8 lg:px-6 xl:px-8 py-3 rounded-full w-fit cursor-pointer poppins ">
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

{
  /* {option.options ? (
                    <div
                      className="cursor-pointer flex items-center gap-1"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <span className="text-white hover:text-yellow transition-colors duration-200 text-lg">
                        {option.label}
                      </span>
                      <ChevronDown className="text-white h-5 w-5" />
    
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                          {option.options.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subItem.href}
                              className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-yellow"
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : ( */
}
