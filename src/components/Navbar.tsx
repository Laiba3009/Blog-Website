import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const navigation = [
    { title: "Home", href: "/" },
    { title: "contact", href: "/contact" },
  ];
  return (
    <div className="w-full bg-gradient-to-r from-indigo-200 via-pink-300 to-pink-500 h-20 shadow-md sticky top-0 backdrop-blur-2xl transition-colors z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0 h-full">
      <Image
        src="/images/logo.png"
        alt="logo"
        width={130} height={150}
        className=" pt-2"
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
        <div className="md:hidden">
          <FiMenu className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
