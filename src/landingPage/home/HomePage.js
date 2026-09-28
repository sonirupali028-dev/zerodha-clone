import React from 'react'
import Hero from './Hero';
import Education from './Education';
import Pricing from './Pricing';
import Stats from './Stats';
import OpenAccount from '../Open Account';
import Navbar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
  return ( 
    <>
     <Navbar />
     <Hero />
     <Stats />
     <Pricing />
     <Education/>
     <OpenAccount />  
     <Footer />
    </>
   );
}

export default HomePage;