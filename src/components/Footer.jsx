import React from 'react';
import {FaFacebookF} from 'react-icons/fa'
import {RiTwitterXLine} from 'react-icons/ri'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='w-full bg-gray-400 py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
          <h1>BEACHES. </h1>
          <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
              <FaFacebookF className='icons'/>
             <RiTwitterXLine className='icons'/>
             <BsInstagram className='icons'/>
             <FaLinkedinIn className='icons'/>
             <BsYoutube className='icons'/>
          </div>
        </div>
        <div className='flex justify-between text-white'>
          <ul className='lg:flex'>
             <li>About</li> 
             <li>Funding</li> 
             <li>Careers</li> 
             <li>News</li> 
             <li>Advertising</li> 
          </ul>
          <ul className='text-right lg:flex'>
            <li>Home</li>
            <li>Places</li>
            <li>Travel</li>
            <li>Views</li>
            <li>Bookings</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
