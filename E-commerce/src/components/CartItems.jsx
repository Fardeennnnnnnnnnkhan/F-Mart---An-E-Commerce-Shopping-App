import React, { useContext } from 'react';
import ShopContext from '../Context/ShopContext';
import { IoTrashBin } from "react-icons/io5";

function CartItems() {
  const { getTotalAmounts ,  all_products, cartItems, removeFromCart } = useContext(ShopContext);

  const cartProducts = all_products.filter(product => cartItems[product.id] > 0);
  
  return (
    <div className='cartitems h-screen w-[90vw] mx-auto mt-12'>
    <div className='grid grid-cols-6 font-bold text-center border-b-2 pb-2'>
      <p>Product</p>
      <p>Price</p>
      <p>Title</p>
      <p>Total</p>
      <p>Quantity</p>
      <p>Remove</p>
    </div>

    <div className='details'>
      {cartProducts.map((product) => (
        <div key={product.id} className='cart-item grid grid-cols-6 items-center text-center gap-4 py-4 border-b'>
          <img className='w-20 h-12 mx-auto' src={product.image} alt={product.title} />
          <p>${product.newPrice}</p>
          <p>{product.name}</p>
          <p>${product.newPrice * cartItems[product.id]}</p>
          <p>{cartItems[product.id]}</p>
          <button className='px-24'  onClick={() => removeFromCart(product.id)}>
            <IoTrashBin />
          </button>
        </div>
      ))}
    </div>


    <div className="w-full flex gap-4 my-8">

      <div className="right w-1/2 px-4 ">
        <h1 className='text-2xl  '>Cart Total</h1>
      
        <div className="add flex text-gray-600 justify-between px-2 py-4 border-b-[1px] border-zinc-800">
          <h4 className=''>SubTotal</h4>
          <p>${getTotalAmounts()}</p>

        </div>
        
        <div className="add flex text-gray-600  justify-between px-2 py-4 border-b-[1px] border-zinc-800">
          <h4 className=''>Shipping Fees</h4>
          <p>None</p>

        </div>
        
        <div className="add text-gray-950 font-bold flex  justify-between px-2 py-4 border-b-[1px] border-zinc-800">
          <h4 className=''>Total</h4>
          <p>${getTotalAmounts()}</p>

        </div>
        
        <button className='py-4 px-7 hover:bg-orange-500 bg-orange-600 mt-6 text-white rounded-lg '>Proceed To CheckOut</button>
      </div>
       
       <div className="left w-1/2 py-4 px-10  ">

        <h3 className='text-gray-500 text-md '>If You Have a Coupon Code . Enter  It Here To Get An Discount</h3>
        <div className="inputbox flex my-6 ">
            <input className='h-12 border-none rounded-tl-xl rounded-bl-xl  text-black p-4  w-80' type="" placeholder='Coupon Code' />
            <button className=' rounded-tr-xl border-none rounded-br-xl px-3 bg-black text-white  h-12'>Subscribe</button>
        </div>
       </div>
    </div>
  </div>



  );
}

export default CartItems;