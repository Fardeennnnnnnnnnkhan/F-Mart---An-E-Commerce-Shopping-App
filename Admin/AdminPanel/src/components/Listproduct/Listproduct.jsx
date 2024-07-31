import React, { useState, useEffect } from "react";
import "../Listproduct/Listproduct.css";
import { FaTrash } from 'react-icons/fa'; 

function Listproduct() {
  const [allproducts, setallproducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:3000/allproducts")
      .then((resp) => resp.json())
      .then((data) => {
        setallproducts(data);
      });
  };

  useEffect(() => {
     fetchInfo();
  }, []);
  
  const removeProduct = async (id) => {
    await fetch('http://localhost:3000/removeproduct', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id })
    });

    fetchInfo();
  };

  return(
    <>
    <div className='cartitems bg-white w-[90vw] mx-auto  mb-4 '>
    <h1 className='text-center mt-4 text-4xl text-green-500 font-serif' >List Products</h1>


    <div className='mt-10 grid grid-cols-6 font-bold text-center border-b-2 pb-2'>
    <p>Product</p>
    <p>Title</p>
    <p>OldPrice</p>
    <p>NewPrice</p>
    <p>Category</p>
    <p>Remove</p>
  </div>

  <div className='details '>
    {allproducts.map((product) => (
      <div key={product.id} className='cart-item grid grid-cols-6 items-center text-center gap-4 py-4 border-b'>
        <img className='w-24 h-20 mx-auto object-contain' src={product.image} alt={product.title} />
        <p>{product.name}</p>
        <p>${product.oldPrice}</p>
        <p>${product.newPrice }</p>
        <p>{product.category }</p>
        <button onClick={()=> removeProduct(product.id)} className='px-24'  >
          <FaTrash className="text-red-600 hover:text-black" size={20} />
        </button>
      </div>
    ))}
  </div>

    </div>
    </>

  );
}

export default Listproduct;
