import React, { useContext, useState } from 'react'
import logo from '../images/cart..svg'
import {Link} from 'react-router-dom'
import ShopContext from '../Context/ShopContext'
import { HiOutlineShoppingCart } from "react-icons/hi";
function Navbar() {
    const [menu  , setMenu] = useState("Home")
    const {getTotalCartItems}  = useContext(ShopContext)

    const handleLogout = () => {
        localStorage.removeItem('auth-token');
        window.location.replace('/login');
      };
      

  return (
        <>
    <div className='w-full  px-20 py-6 bg-white flex items-center justify-between' >
        <div className="left px-4 ">
            <h1 className='text-5xl font-bold hover:text-blue-600 text-green-500 ' >F-Mart</h1>
        </div>
        <div className="center text-green-800   ">
            <ul className='flex gap-8 '>
            <li onClick= {()=>{setMenu('Home')} }  className='relative'>
            <Link to="/">
                Home { menu === "Home" ? <hr className='bg-green-600  outline-none absolute h-1 rounded-full w-11' /> : null }
            </Link>
        </li>
            <li onClick={()=>{setMenu('Men')}} className='relative'>
            <Link  to="/mens">
                Men { menu === "Men" ? <hr className='bg-green-600  outline-none absolute h-1 rounded-full w-8' /> : null }
            </Link>
        </li>
            <li onClick={ ()=>{setMenu('Women')}}  className='relative'>
            <Link to="/women">
                Women { menu === "Women" ? <hr className='bg-green-600  outline-none absolute h-1 rounded-full w-14' /> : null }
            </Link>
        </li>
            <li onClick={()=>{setMenu('Kids')}} className='relative'>
            <Link  to="/kids">
                Kids { menu === "Kids" ? <hr className='bg-green-600  outline-none absolute h-1 rounded-full w-8' /> : null }
            </Link>
        </li>
            </ul>
        </div> 

        <div className="right items-center relative flex gap-8 px-5">
          <Link  to={'/login'}> {localStorage.getItem('auth-token') ? <button  onClick={handleLogout} className='bg-blue-500 hover:bg-green-600 text-white font-light py-3 px-7 rounded-lg'>Logout</button>  : <button  className='bg-blue-500 hover:bg-blue-700 text-white font-light py-3 px-7 rounded-lg'>Login</button>  }  </Link>
         <Link to={'/cart'}>
            <HiOutlineShoppingCart size={40} />
         <div className=" text-center absolute -top-2 right-2 counter bg-red-600 w-6 h-6 rounded-full text-white" >{getTotalCartItems()}</div>
         </Link>
        </div>
    </div>
        <hr className='bg-zinc-600 h-[px]' />
        </>
  )
}

export default Navbar
