import React from 'react'
import {Link , useNavigate} from 'react-router-dom'
import discount from '../images/discount2.png'
function Offer() {

  
  const navigate = useNavigate();
  
  const handleRedirect = () => {
    navigate('/women');
  };

  return (
    <div className='w-full h-screen flex justify-center items-center  bg-blue-600'>
        <div className="w-[70vw] h-[60vh] bg-white flex   ">
<div className="left relative w-1/2 h-full flex flex-col  mt-32 p-5 pb-0 ">

    <h1 className='text-4xl' >Unbeatable Prices on Top Products</h1>
    <p className='text-xl py-1' >Flat 20% Discount </p>
  
    <Link className='homebtn mx-auto relative text-white overflow-hidden border-none bg-blue-600  rounded-full z-[999]  py-3 px-7 '> Check Now
     <div onClick={handleRedirect } className=" hoverdiv absolute top-0 -left-[100%]  w-[100%] h-[100%] bg-green-600 transition-[left] ease duration-500  "></div>
    </Link>
</div>
<div className="right w-1/2 flex justify-center items-center  h-full object-cover overflow-hidden ">
  <img src={discount} alt="" />
</div>
        </div>
    </div>
  )
}

export default Offer
