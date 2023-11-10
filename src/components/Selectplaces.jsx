import React from 'react';

const Selectplaces = (props) => {
  return (
    
    <div className='relative'>
    <img className='w-full h-full object-cover' src={props.bg} alt="" />
   <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
    <p className='absolute left-4 bottom-4 font-bold text-2xl text-white'>
        {props.text}
        </p>
   </div>
</div>
  );
}

export default Selectplaces;
