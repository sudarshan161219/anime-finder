import React from "react";
import { Link } from "react-router-dom";
import { AiFillAlipayCircle } from "react-icons/ai";
const Navbar = () => {
  return (
    <nav className='navbar mb-10 p-3 shadow-lg '>
      <div className='container mx-auto justify-between flex'>
        <div className='flex items-start'>
          <AiFillAlipayCircle className='inline pr-2 text-3xl' />
          <Link to='/' className='text-lg font-bold align-middle'>
            AniFinder 
          </Link>
        </div>

        <div className='flex items-start gap-10 '>
        {/* <Link to='/wallpapers' className='text-sm font-semibold hover:text-gray-200 align-middle'>
            Wallpapers
          </Link> */}
          <Link to='/' className='text-sm font-semibold hover:text-gray-200 align-middle'>
            Home
          </Link>
          <Link to='/about' className='text-sm font-semibold hover:text-gray-200  align-middle'>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
