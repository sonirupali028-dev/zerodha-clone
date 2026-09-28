import React from 'react'

function Hero() {
  return ( 
   <div className='container p-5'>
            <div className='row text-center'>
                 <img src='https://zerodha.com/static/images/landing.svg' alt='Hero Img' className='mb-5'/>
                 <h1 className='mt-4'>Invest in everything</h1>
                 <p>Online platform to invest in stocks, IPOs, derivatives, mutual funds, ETFs, bonds, and more.</p>
                 <button className='p-2 hover:bg-black  text-white font-bold fs-5 rounded transition duration-200'
                  style={{width:"20%",margin:"0 auto",  padding:"10px", backgroundColor:"#387ED1", }}
                  >Sign up for free</button>
            </div>
        </div>
   );
} 

export default Hero;