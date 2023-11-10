import React, { useState } from 'react';
import {BsArrowLeftSquare, BsArrowRightSquare} from 'react-icons/bs'


const sliderData = [
  {
    url: 'https://images.unsplash.com/photo-1538964173425-93884d739596?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    url: 'https://images.unsplash.com/photo-1503756234508-e32369269deb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fHw%3D'
  }, 
  {
    url: 'https://images.unsplash.com/photo-1577172249844-716749254893?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D'
  },
  {
    url: 'https://images.unsplash.com/photo-1525183995014-bd94c0750cd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D'
  },
];

const Carousel = () => {

  const[slide, setSlide] = useState(0)
  const length = sliderData.length;
   
  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1)
  }
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1 )
  };



  return (
    <div className='max-w-[1240px] mx-auto px-6 py-16 relative flex justify-center items-center bg-gray-100/40'>
       <BsArrowLeftSquare
       onClick={prevSlide} 
       className='absolute top-[50%] text-3xl text-white cursor-pointer left-8  md:w-full md:left-60'/>
       <BsArrowRightSquare 
       onClick={nextSlide} 
       className='absolute top-[50%] text-3xl text-white cursor-pointer right-8  md:w-full md:right-60'/>
        {sliderData.map((item, index) =>{
          return (
          <div 
          key={index} 
           className={index === slide ? 'opacity-100' : 'opacity-0'}>
            {index === slide && (
            <img className=' rounded-md' 
            src={item.url} alt="/" />)}
          </div>
         )
        })}
    </div>
  );
}

export default Carousel;
