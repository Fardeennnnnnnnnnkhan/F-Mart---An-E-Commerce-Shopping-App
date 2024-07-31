import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ShopContext from '../Context/ShopContext';

function NewCollection() {
  const navigate = useNavigate();
  const { all_products } = useContext(ShopContext);
  const [newCollection, setNewCollection] = useState([]);

  useEffect(() => {
    const shuffledProducts = all_products.sort(() => 0.5 - Math.random());
    const selectedProducts = shuffledProducts.slice(0, 4);
    setNewCollection(selectedProducts);
  }, [all_products]);

  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="w-full h-[100%] bg-white">
      <h1 className='text-black-600 text-center pt-10 text-5xl'>New Collection</h1>
      <hr className='w-72 mt-4 bg-black h-1 rounded-lg mx-auto' />

      <div className="flex flex-wrap bg-white justify-center">
        {newCollection.map((item) => (
          <div key={item.id} className="card-container my-8 mx-auto">
            <div 
              onClick={() => handleCardClick(item.id)} 
              className="cards w-[20vw] h-[30rem] bg-white shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              <img className="h-96 w-full object-cover" src={item.image} alt={item.name} />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <div className="prices flex gap-4 py-1">
                  <h4 className="text-green-500">${item.newPrice}</h4>
                  <h4 className="line-through text-red-500">${item.oldPrice}</h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewCollection;