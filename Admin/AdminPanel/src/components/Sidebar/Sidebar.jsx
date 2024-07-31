import React from 'react'
import {Link} from 'react-router-dom'
import { BsFillCartPlusFill } from "react-icons/bs";
import { TiThList } from "react-icons/ti";
import '../Sidebar/Sidebar.css'
function Sidebar() {
  return(
    <div className='w-[20vw] bg-white border-r-[1px] border-zinc-300 sidebar h-full py-4'>
      <Link to={'/addproduct'}>
         <div className="addProduct flex justify-center items-center hover:bg-blue-500 gap-8 mx-6 my-4 rounded-xl text-white bg-blue-600 py-2">
            <BsFillCartPlusFill className='w-10 h-8'/>
               <h1 className='text-lg font-light'>Add Product</h1>
         </div>
      </Link>
      <Link to={'/listproduct'}>
         <div className="addproduct flex justify-center items-center hover:bg-blue-500 text-white mx-6 rounded-xl my-4 gap-8 bg-blue-600 py-2">
     <TiThList className=' w-10 h-8'/>
               <h1 className='text-lg font-light'>List Product</h1>
         </div>
      </Link>
    </div>
  )
}

export default Sidebar


