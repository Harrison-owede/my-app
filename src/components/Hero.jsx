import React from 'react';
import background from '../assets/background.png'
import { AiOutlineSearch } from 'react-icons/ai';
const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
       <img className='w-full h-full object-cover' src={background} alt="my background" />


       <div className='w-full h-full absolute top-0 left-0 bg-gray-900/25'></div>

       <div className='absolute top-0 h-full w-full justify-center flex flex-col text-center text-white p-4'>
        <h1>Make Travel Fun.</h1>
        <h2 className='py-4'>One Of The Beautiful Locations In The World.</h2>
        <form className='flex items-center justify-between  max-w-[700px] w-full  mx-auto border p-1 rounded-md text-black bg-gray-100/90'> 
            <div>
                <input className='bg-transparent w-[300px] sm:w-[400px] font-[poppins] focus:outline-none' type="text" placeholder='Search Places' />
            </div>
            <div>
                <button><AiOutlineSearch size={20}  className='icons' style={{color:'#ffffff'}}/>
                </button>
            </div>
        </form>
       </div>
    </div>
  );
}

export default Hero;
