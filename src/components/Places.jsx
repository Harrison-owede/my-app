import React from 'react';
import bahamas from '../assets/bahamas.png'
import borabora from'../assets/bora bora.png'
import maldives from '../assets/maldives.png'
import seychelles from '../assets/seychelles.png'
import whitehaven from '../assets/whitehavenbeach.png'
const Places = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>Some Of The Beautiful Places</h1>
        <p>All-round The World</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={bahamas} alt="" />
            <img className='w-full h-full object-cover' src={borabora} alt="" />
            <img className='w-full h-full object-cover' src={maldives} alt="" />
            <img className='w-full h-full object-cover' src={seychelles} alt="" />
            <img className='w-full h-full object-cover' src={whitehaven} alt="" />
            

        </div>
      
    </div>
  );
}

export default Places;
