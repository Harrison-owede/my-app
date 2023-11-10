import React from 'react';
import bahamas from '../assets/bahamas.png'
import borabora from'../assets/bora bora.png'
import maldives from '../assets/maldives.png'
import seychelles from '../assets/seychelles.png'
import bahamas3 from '../assets/bahamas3.png'
import Selectplaces from './Selectplaces'
import whitehaven1 from '../assets/whitehaven1.png'
const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3'>
     <Selectplaces bg={bahamas} text='Bahamas'/>
     <Selectplaces bg={bahamas3} text='Maldives'/>
     <Selectplaces bg={whitehaven1} text='Whitehavenbeach'/>
     <Selectplaces bg={seychelles} text='Seychelles'/>
     <Selectplaces bg={borabora} text='Borabora'/>
     <Selectplaces bg={maldives} text='Landmarkbeach'/>
      
    </div>
  );
}

export default Selects;
