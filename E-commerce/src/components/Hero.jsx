import React from 'react';
import { motion } from 'framer-motion';
import home2 from '../images/homie.png'
import { useNavigate } from 'react-router-dom';
import discount2 from '../images/discount2.png'
import { redirect } from 'react-router-dom';
const headingItems = ['Shop the Latest', 'Trends and Styles', 'At F-Mart'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 10,
    },
  },
};

const Hero = () => {

    const navigate = useNavigate();
  
    const handleRedirect = () => {
      navigate('/mens');
    };

  return (
    <div className="wrapper flex ">
         <motion.div
      className="w-[50vw] relative pt-40 h-[87.3vh] bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {headingItems.map((item, index) => (
        <motion.div
          key={index}
          className="heading flex w-full  items-center justify-center capitalize placeholder"
          variants={itemVariants}
          // style={{ width: '100%', height: '30vh' }} 
        >
          <h1 className="text-green-600 font-semibold hover:text-blue-600 text-[6vw] tracking-tighter leading-none">
            {item}
          </h1>
        </motion.div>
      ))}
          <button onClick={handleRedirect}  className='homebtn absolute mt-16  text-white border-none font-2xl font-light bg-blue-700 overflow-hidden transition-[left] ease-in delay-100 z-[99]  border-zinc-100 border-[1px] rounded-full px-7 py-4  left-1/2 -translate-x-[50%] -translate-y-[50%]' >Shop Now
          <div className="hoverdiv w-[100%] h-[100%] transition-[left] ease-in duration-500 z-[-1]  bg-green-600 absolute top-0 -left-[100%]  "></div>
          </button>
    </motion.div>
<div className="left w-[50vw] h-[87.3vh]  bg-white">
<img className="left w-[50vw] h-[87.2vh] object-contain" src={home2} alt="" />

</div>
    </div>
 
  );
};

export default Hero;