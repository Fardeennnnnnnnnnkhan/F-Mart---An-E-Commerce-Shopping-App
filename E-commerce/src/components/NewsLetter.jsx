import React from 'react'
import { motion } from "framer-motion"
function Marque() {
  return (
    <div data-scroll data-scroll-speed = '.1' className='w-full py-20  rounded-3xl overflow-hidden bg-green-600'>
      < div className="text text-white flex px-5   whitespace-nowrap border-t-2 border-b-2 border-zinc-100 ">
        <motion.h1   initial={{x:'0'}} animate = {{x : "-100%"}} transition={{ease : 'linear', duration:8 , repeat:Infinity  }}  className=' pr-20 text-[15vw] text-white leading-none tracking-tighter font-semibold  pt-10 pb-10 '  > Welcome To F-Mart</motion.h1>
        <motion.h1 initial={{x:'0'}} animate = {{x : "-100%"}} transition={{ease : 'linear' , duration: 8 , repeat:Infinity }}  className=' pr-20 text-[15vw] text-white leading-none  tracking-tighter font-semibold  pt-10 pb-10 '> Welcome To F-Mart</motion.h1>
        <motion.h1 initial={{x:'0'}} animate = {{x : "-100%"}} transition={{ease : 'linear' , duration: 8 , repeat:Infinity }}  className=' pr-20 text-[15vw]  text-whiteleading-none  tracking-tighter font-semibold  pt-10 pb-10 '> Welcome To F-Mart</motion.h1>
    </div>
      </div>
  )
}

export default Marque
