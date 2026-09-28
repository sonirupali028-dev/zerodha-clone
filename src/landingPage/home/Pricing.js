import React from 'react'

function Pricing() {
  return (
    <>
    <div className='px-3 py-4 w-full m-1 flex mb-4 flex-colmd:flex-row items-start md:items-center gap-6 p-6 bg-white rounded-lg border border-gray-100'>
      <img src='https://zerodha.com/static/images/kc-logo-landing.svg' alt = "Kite Connect"/>
      <p>Need more? Build your own trading and investing experience with Kite Connect, simple HTTP APIs to place orders, stream market data, manage your account, and more. <a  href='' style={{textDecoration:"none"}} >Explore<i class="fa-solid fa-arrow-right-long" aria-hidden="true"></i></a></p>
 </div>
      <div className='container   mx-auto px-4 py-8 '>
        <div className='row grid grid-cols-1 md:grid-cols-3 gap-6 items-center  p-5'>
          <div className='col-5 p-3'>
             <h1>Unbeatable pricing</h1>
             <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
             <a href='' style={{textDecoration:"none"}} >See pricing <i class="fa-solid fa-arrow-right-long" aria-hidden="true"></i></a>
        </div>

         
          <div className='col col-6'></div>
      
             <div style={{height:30}}className=''>
               <img src='https://zerodha.com/static/images/pricing-eq.svg' alt='price' />
               
               <img src='https://zerodha.com/static/images/pricing-eq.svg' alt='price' />
               
               <img src='https://zerodha.com/static/images/other-trades.svg' alt='price' />
              </div>
          </div>
         
     
        </div>
    </>
  );
}

export default Pricing;