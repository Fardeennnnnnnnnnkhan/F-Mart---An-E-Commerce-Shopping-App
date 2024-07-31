import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ShopContext from '../Context/ShopContext';

const RelatedProducts = () => {
  const { all_products } = useContext(ShopContext);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const navigate = useNavigate();
  const { productId } = useParams();

  useEffect(() => {
    // Find the current product
    const currentProduct = all_products.find((product) => product.id === parseInt(productId));
    
    if (currentProduct) {
      // Filter products that belong to the same category as the current product
      const sameCategoryProducts = all_products.filter((product) => product.category === currentProduct.category && product.id !== currentProduct.id);
      // Randomly select 4 products from the filtered same category products
      const shuffledProducts = sameCategoryProducts.sort(() => 0.5 - Math.random());
      const selectedProducts = shuffledProducts.slice(0, 4);
      setRelatedProducts(selectedProducts);
    }
  }, [all_products, productId]);

  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="related-products w-[90vw] mx-auto ">
      <h2 className="text-2xl text-center font-light mb-4">Related Products</h2>
      <div className="flex flex-wrap bg-white justify-center">
        {relatedProducts.map((item) => (
          <div
            key={item.id}
            className="card-container my-8 mx-auto"
            onClick={() => handleCardClick(item.id)}
          >
            <div className="cards w-[20vw] h-[30rem] bg-white shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
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
};

export default RelatedProducts;
