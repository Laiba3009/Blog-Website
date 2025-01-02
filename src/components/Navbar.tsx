"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = [
    { title: "Home", href: "/" },
    { title: "Contact", href: "/contact" },
  ];
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-gradient-to-r from-indigo-200 via-pink-300 to-pink-500 h-20 shadow-md sticky top-0 backdrop-blur-2xl transition-colors z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0 h-full">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={130}
          height={150}
          className="pt-2"
        />
        <div className="hidden md:inline-flex items-center gap-7 text-gray-900 hover:text-black duration-200">
          {navigation.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className="text-sm uppercase font-semibold relative group overflow-hidden"
            >
              {item?.title}
              <span className="w-full h-[1px] bg-blue-700 absolute inline-block left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-200" />
            </Link>
          ))}
        </div>
        <div className="md:hidden" onClick={toggleMenu}>
          <FiMenu className="text-2xl" />
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-20 left-0 right-0 bg-gradient-to-r from-indigo-200 via-pink-300 to-pink-500 shadow-md`}
      >
        <div className="flex flex-col items-center py-4">
          {navigation.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className="text-sm uppercase font-semibold py-2 text-gray-900 hover:text-black duration-200"
            >
              {item?.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
