"use client"
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const handleLogoClick = () => {
    router.push("/"); // Redirect to homepage or any other route
  };
    return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 border-b border-white/20 shadow-lg">
    <div className="max-w-7xl px-4">
    <div className="flex justify-between h-16 items-center">
      <div 
      onClick={handleLogoClick}
      className="flex items-center space-x-4 cursor-pointer">
      <Image src="icon.svg" alt="Fair Forcast Logo" width={40} height={40} />
      <div onClick={handleLogoClick} className="text-white text-2xl font-extrabold tracking-wide">
      Fair Forecast
      </div>
      </div>
      {/* <!-- Nav Links (desktop) --> */}
      <div className="hidden md:flex space-x-8 text-white font-medium">
      {/* <a href="/summary" className="hover:text-yellow-300 transition duration-300">Project</a> */}
      <a href="/research" className="hover:text-yellow-300 transition duration-300">Research</a>
      </div>
      {/* <!-- Mobile Menu Button --> */}
      <div className="md:hidden">
      <button className="text-white hover:text-yellow-300 transition duration-300 focus:outline-none">
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
      </button>
      </div>
    </div>
    </div>
    </nav>
    )
}

export default Navbar;