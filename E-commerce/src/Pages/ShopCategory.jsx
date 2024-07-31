import React, { useContext } from 'react';
import ShopContext from '../Context/ShopContext';
import { useNavigate } from 'react-router-dom';

function ShopCategory({ banner, category }) {
  const navigate = useNavigate();
  const { all_products } = useContext(ShopContext);

  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  console.log('All products from context:', all_products);

  if (!all_products || all_products.length === 0) {
    return <div>Loading...</div>;
  }

  const products = all_products.filter(product => product.category === category);

  console.log('Filtered products for category:', category, products);

  return (
    <div className='w-full h-auto'>
      <img
        src={banner}
        alt={`${category} banner`}
        className="w-full h-96 object-contain mb-4 p-5 transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl"
      />
      <h1 className="text-4xl text-center font-light my-8">
        {category.charAt(0).toUpperCase() + category.slice(1)} Articles
      </h1>
      <div className="flex flex-wrap max-w-[80vw] mx-auto justify-between gap-4">
        {products.map(product => (
          <div
            
            className="p-4 border rounded-lg shadow-sm w-[23%] mb-4 transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl cursor-pointer"
            onClick={() => handleCardClick(product.id)}
            style={{ height: '400px' }}
          >
            <div className="h-72 mb-4 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-xl py-2 font-light">{product.name}</h2>
            <p className="text-lg flex gap-3">
              <span className="text-green-600 font-bold">${product.newPrice}</span>
              <span className="line-through text-gray-500 ml-2">${product.oldPrice}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopCategory;