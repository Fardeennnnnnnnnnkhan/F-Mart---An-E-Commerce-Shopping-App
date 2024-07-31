import React from 'react'
import '../Navbar/Navbar.css'
function Navbar() {
  return (
    <div className='w-full h-[12vh] navbar flex justify-between items-center px-10  py-4 border-b-[1px] border-zinc-600'>
       <div className="left px-4 ">
            <h1 className='text-5xl font-bold hover:text-blue-600 text-green-500 ' >F-Mart</h1>
        </div>

        <div className="text-2xl font-light hover:text-blue-600 text-blue-500  middle">
            <h1>Admin Panel</h1>
        </div>
        <div className="profile ">
            <img className='w-16 h-16 rounded-full object-cover' src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
    

    </div>
  )
}

export default Navbar

