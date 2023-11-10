import React from 'react';
import {RiCustomerService2Fill} from 'react-icons/ri';
import {MdOutlineTravelExplore} from 'react-icons/md';

const Search = () => {
  return (
    <div className='max-w-[1240px] py-16 px-4 mx-auto gap-4 grid lg:grid-cols-3'>
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
            <div>
                <h2>BEAUTIFUL VACATION PLACES FOR TWO OR MORE PEOPLE</h2>
                <p className='py-4'>
                When your bags are packed, your passport is ready, and the whole family is on
                 their way to the airport, the vacation anticipation is at an all-time high.
                  You have turned off your work emails, found a house sitter, and 
                  made your favorite vacation playlist to match the Beautiful beaches around
                  the world, a beautiful vacation helps to relieve stress and boredom, gives us a change
                  of scenery, provides us with adventure, and helps to bring us closer to the
                  people in our lives and also most of the times children tend to forget about 
                  the fancy toys but they will never forget about the beautiful places you visited 
                  as a family.

                </p>
            </div>
            <div className='grid sm:grid-cols-2 gap-8 py-4'>
                <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button><RiCustomerService2Fill size={50}/></button>
                    <div>
                        <h3 className='py-2'>GREAT SERVICE</h3>
                        <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 1O YEARS IN A ROW</p>
                    </div>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button><MdOutlineTravelExplore size={50}/></button>
                    <div>
                        <h3 className='py-2'>AUTOMATED BOOKINGS</h3>
                        <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 1O YEARS IN A ROW</p>
                    </div>
                    </div>
            </div>
             </div>
      <div>
        <div className='border text-center'>
            <p className='pt-2'>GET AN ADDITIONAL 20% OFF</p>
            <p className='py-4'>24 HOURS LEFT</p>
            <p className='bg-gray-800 text-gray-300 py-2'>BOOK NOW AND SAVE</p>
        </div>
        <form className='w-full'>
        <div className='flex flex-col my-2'>
            <label>Destinaion</label>
            <select className='border rounded-md p-2'>
                <option>Bahamas</option>
                <option>Maldives</option>
                <option>Bora bora</option>
                <option>Whitehaven</option>
                <option>Seychelles</option>
            </select>
        </div>
        <div className='flex flex-col my-4'>
            <label>Check-In</label>
            <input className='border rounded-md p-2' type="date" />
        </div>
        <div className='flex flex-col my-2'>
            <label>Check-Out</label>
            <input className='border rounded-md p-2' type="date" />
        </div>
          <button className='w-full my-4'>Rates & Availabilities</button>
        
        </form>
      </div>
           
    </div>
  );
}

export default Search;
