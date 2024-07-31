import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import star from "../images/golden_star.png";
import RelatedProducts from '../components/RelatedProducts';
import ShopContext from "../Context/ShopContext";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { all_products, addToCart } = useContext(ShopContext);

  useEffect(() => {
    // Find the product in the all_products array
    const product = all_products.find(p => p.id === parseInt(productId, 10));
    setProduct(product);
  }, [productId, all_products]);

  if (!product) return <p>Product not found {productId}</p>;

  return (
    <>
      <div className="w-[90vw] h-full bg-white mx-auto mt-8">
        <div className="box flex">
          <div className="flex overflow-hidden flex-col">
            <img
              className="w-30 object-cover h-36 mt-0 m-1"
              src={product.image}
              alt={product.name}
            />
            <img
              className="w-30 object-cover h-36 m-1"
              src={product.image}
              alt={product.name}
            />
            <img
              className="w-30 object-cover h-36 m-1"
              src={product.image}
              alt={product.name}
            />
            <img
              className="w-30 object-cover h-36 m-1 mb-0"
              src={product.image}
              alt={product.name}
            />
          </div>
    


          <img
            className="h-[39vw] object-cover w-[30vw]"
            src={product.image}
            alt={product.name}
          />
         
          <div className="content px-12">
            <h1 className="text-5xl">{product.name}</h1>
            <div className="stars flex gap-2 mt-4">
              <img className="w-5 h-5" src={star} alt="" />
              <img className="w-5 h-5" src={star} alt="" />
              <img className="w-5 h-5" src={star} alt="" />
              <img className="w-5 h-5" src={star} alt="" />
              <p className="text-gray-400">({product.reviews})</p>
            </div>
            <p className="text-lg flex gap-3 my-4">
              <span className="text-green-600 text-3xl font-light">
                ${product.newPrice}
              </span>
              <span className="line-through my-1 text-red-500 ml-2">
                ${product.oldPrice}
              </span>
            </p>
            <p className="text-zinc-950 text-xl py-6">{product.description || "No description available"}</p>
            <h1 className="mt-4 text-lg"> Select Size :</h1>
            <div className="size flex flex-wrap gap-5 mt-3">
              <h2 className="py-2 bg-zinc-100 px-4 hover:bg-zinc-300 border-zinc-500 border-[1px] font-2xl text-gray-500">S</h2>
              <h2 className="py-2 bg-zinc-100 px-4 hover:bg-zinc-300 border-zinc-500 border-[1px] font-2xl text-gray-500">M</h2>
              <h2 className="py-2 bg-zinc-100 px-4 hover:bg-zinc-300 border-zinc-500 border-[1px] font-2xl text-gray-500">L</h2>
              <h2 className="py-2 bg-zinc-100 px-4 hover:bg-zinc-300 border-zinc-500 border-[1px] font-2xl text-gray-500">XL</h2>
            </div>
            <button onClick={() => addToCart(product.id)} className="px-8 hover:bg-red-500 mt-6 py-4 bg-red-600 text-white font-xl">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <RelatedProducts />
      <div className="descriptionBox w-[90vw] h-[100vh] mt-6 mx-auto">
        <div className="top flex gap-0">
          <h2 className="border-[1px] border-zinc-500 px-6 cursor-pointer py-2">Description</h2>
          <h2 className="border-[1px] border-zinc-500 text-zinc-500 cursor-pointer px-6 py-2">Reviews ({product.reviews})</h2>
        </div>
        <hr className="w-full bg-zinc-900 m-2" />
        <div className="content">
          <h1 className="text-2xl text-black">F-Mart: Your Ultimate E-Commerce Destination</h1>
          <p>Welcome to F-Mart, the premier online shopping destination designed to provide a seamless and enjoyable shopping experience. At F-Mart, we believe that shopping should be more than just a transaction; it should be an experience that is both convenient and enjoyable. Our platform is crafted to meet the diverse needs of our customers, offering a wide range of products across various categories, including men’s, women’s, and kids’ fashion, electronics, home goods, and more.</p>
          <h1 className="text-xl my-3">Discover a World of Products</h1>
          <p>F-Mart is your one-stop shop for high-quality products at competitive prices. Our extensive catalog includes the latest trends in fashion, from casual wear to formal attire, ensuring that you stay stylish and on-trend. Whether you're searching for the perfect outfit for a special occasion or everyday essentials, F-Mart has you covered. Our product range also extends to home essentials, electronics, beauty products, and more, making it easy to find everything you need in one place.</p>
          <h1 className="text-xl my-3">User-Friendly Shopping Experience</h1>
          <p>Navigating F-Mart is effortless thanks to our intuitive design and user-friendly interface. Our website and mobile app are optimized for both desktop and mobile devices, allowing you to shop anytime, anywhere. With a clean and modern design, easy-to-use filters, and advanced search functionalities, finding your desired products is quick and straightforward. Enjoy a smooth checkout process with secure payment options and real-time order tracking.</p>
          <h1 className="text-xl my-3">Personalized Shopping</h1>
          <p>At F-Mart, we prioritize your shopping preferences. Our intelligent recommendation engine suggests products based on your browsing history and purchase behavior, helping you discover new favorites and special offers tailored just for you. Stay updated with our latest promotions, discounts, and exclusive deals through personalized notifications and our engaging newsletter.</p>
          <h1 className="text-xl my-3">Commitment to Quality and Service</h1>
          <p>Quality is at the heart of everything we do at F-Mart. We partner with reputable brands and manufacturers to ensure that every product meets our high standards of quality and reliability. Our dedicated customer support team is available to assist you with any questions or concerns, ensuring a hassle-free shopping experience from start to finish.</p>
          <h1 className="text-2xl text-center uppercase text-green-600 my-3">Welcome to F-Mart, where exceptional shopping experiences begin.</h1>
        </div>
      </div>
    </>
  );
};

export default Product;