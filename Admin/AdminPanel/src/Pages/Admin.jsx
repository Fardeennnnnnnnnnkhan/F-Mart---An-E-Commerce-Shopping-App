import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { Route , Routes } from 'react-router-dom'
import Addproduct from '../components/Addproduct/Addproduct'
import Listproduct from '../components/Listproduct/Listproduct'
function Admin() {
  return (
    <div  className='w-full flex h-[88vh] bg-white'>
       <Sidebar/>
       <Routes>
        <Route path= "/" element = {<Addproduct/>}/>
        <Route path='/addproduct' element = {<Addproduct/>} />
        <Route path='/listproduct' element = {<Listproduct/>} />
       </Routes>
    </div>
  )
}

export default Admin
