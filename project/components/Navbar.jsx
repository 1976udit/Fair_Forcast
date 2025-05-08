import React from "react";

const Navbar = () => {
    return (
<nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-md">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      {/* logo */}
      <div className="flex-shrink-0 text-white text-xl font-bold">
         Fair Forcast
      </div>
      {/* <!-- Nav Links (desktop) --> */}
      <div className="hidden md:flex space-x-8 text-white font-medium">
        <a href="#" className="hover:text-yellow-200 transition">Project</a>
        <a href="#" className="hover:text-yellow-200 transition">Contact</a>
      </div>
      {/* <!-- Mobile Menu Button --> */}
      <div className="md:hidden">
        <button className="text-white focus:outline-none">
          {/* <!-- Hamburger Icon --> */}
          <svg className="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>

    )
}

export default Navbar;