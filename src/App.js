import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Places from './components/Places';
import Search from './components/Search';
import Selects from './components/Selects';
import Selectplaces from './components/Selectplaces';
import Carousel from './components/Carousel';
import Footer from './components/Footer';


function App() {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <Places/>
     <Search/>
     <Selects/>
     <Selectplaces/>
     <Carousel/>
     <Footer/>
    </div>
  );
}

export default App;
