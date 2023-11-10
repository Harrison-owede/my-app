import React  from 'react';
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebookF} from 'react-icons/fa'
import {RiTwitterXLine} from 'react-icons/ri'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import { useState } from 'react';

const Navbar = () => {

  const[nav, SetNav] = useState(false);
  const[logo, SetLogo] = useState(false);
  const handleNav = () => {
    SetNav(!nav);
    SetLogo(!logo)
  }



  return (
    <div className="flex w-full justify-between items-center h-20 p-4 absolute z-10 text-white">
        <div> 
            <i onClick={handleNav} className={ logo ? 'hidden' : 'block'}>BELLE BAY.</i>
        </div>
        <ul className='hidden md:flex'>
            <li className="hover:border-b hover:border-cyan-200">Home</li>
            <li className="hover:border-b hover:border-cyan-200">Places</li>
            <li className="hover:border-b hover:border-cyan-200">Travel</li>
            <li className="hover:border-b hover:border-cyan-200">Views</li>
            <li className="hover:border-b hover:border-cyan-200">Bookings</li>
        </ul>
        <div className='hidden md:flex'>
        <BiSearch className='mr-2'/> 
        <BsPerson/> 
         </div>
          {/* hamburger */}

         <div onClick={handleNav} className='md:hidden z-10'>
          { nav ? <AiOutlineCloseCircle className='text-black' size={20}/>  : <HiOutlineMenuAlt4 className='text-black' size={20}/>}
          
          
         </div>
         {/* mobile menu */}
         <div onClick={handleNav} className={nav ? 'absolute left-0 text-black top-0 w-full px-4 py-7 flex flex-col bg-gray-100/90' : 'absolute left-[-100%]' }>
          <ul>
             <i>BELLE BAY</i>
            <li className='border-b-2'>Home</li>
            <li className='border-b-2'>Places</li>
            <li className='border-b-2'>Travel</li>
            <li className='border-b-2'>Views</li>
            <li className='border-b-2'>Bookings</li>
            <div className='flex flex-col'>
              <button className='my-6'>Search</button>
              <button>Account</button>
            </div>
            <div className='flex items-center my-6 justify-between'>
             <FaFacebookF className='icons'/>
             <RiTwitterXLine className='icons'/>
             <BsInstagram className='icons'/>
             <FaLinkedinIn className='icons'/>
             <BsYoutube className='icons'/>
            </div>
          </ul>
         </div>
      
    </div>
  );
}

export default Navbar;
