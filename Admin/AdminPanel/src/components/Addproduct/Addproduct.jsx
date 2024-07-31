import React , {useState} from 'react'
import '../Addproduct/Addproduct.css'
import { FaFileUpload } from "react-icons/fa";
function Addproduct() {
const [image  , setimage] = useState(false)

const imagehandler = (e)=>{
setimage(e.target.files[0])
}
  const [productDetails, setproductDetails] = useState({
    name : "",
    category : "men",
    image  : "",
    oldPrice : "",
    newPrice : " " ,

  })


  const changeHandler = (e)=>{
setproductDetails({...productDetails,[e.target.name]:e.target.value})
  } 

  const addProduct = async () => {
    try {
      console.log(productDetails);
  
      let responseData;
      let product = productDetails;
      let formData = new FormData();
  
      formData.append('product', image); // Remove the extra space in the key name
  
      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        headers: {
          accept: 'application/json',
        },
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      responseData = await response.json();
      if (responseData.success) {
        product.image = responseData.image_url;
        console.log(product);
        await fetch('http://localhost:3000/addproduct', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(product)
        })
          .then((resp) => resp.json())
          .then((data) => {
            data.success ? alert('Product Added Successfully') : alert('Failed');
          })
          .catch((error) => {
            console.error('Error:', error);
            alert('Failed');
          });
      } else {

        console.error('Upload failed', responseData);
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  };
  return (
    <div className='w-full '>
      <h1 className='text-center mt-4 text-4xl text-green-500 font-serif' >Add Product</h1>

      <div className="w-[50vw] text-zinc-400 bg-white   flex flex-wrap mt-10  mx-auto p-3 ">
        <div className="product-detail w-full ">
            <h1 className='text-lg font-light py-2'>Product Title</h1>
            <input value={productDetails.name} onChange={changeHandler} className='w-full p-2 border-zinc-400 text-black border-[1px] rounded-lg' type="text" placeholder="Enter Product Name" name='name' />
        </div>
        <div className="product-detail w-1/2 mt-3">
            <h1 className='text-lg font-light py-2'>Price</h1>
            <input value={productDetails.newPrice} onChange={changeHandler} className='w-72 p-2 text-black border-zinc-400 border-[1px] rounded-lg' type="text" placeholder='ENter' name='newPrice' />
        </div>
        <div className="product-detail w-1/2 mt-3">
            <h1 className='text-lg font-light py-2'>Offer Price </h1>
            <input value={productDetails.oldPrice} onChange={changeHandler} className='w-72 p-2 text-black border-zinc-400 border-[1px] rounded-lg' type="text" placeholder="Enter Discount Price" name='oldPrice' />
        </div>
        <div className="product-detail w-full mt-3">
            <h1 className='text-lg font-light py-2'>Select  Category</h1>
            <select value={productDetails.category} onChange={changeHandler} className='w-72 p-2 text-black border-zinc-400 border-[1px] rounded-lg' name="category"  id="">
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
            </select>
        </div>
        <div className="image w-full mt-4">
            <label htmlFor="fileinput">
         <img className='w-30 h-20' src={image? URL.createObjectURL(image) : <FaFileUpload className='text-black w-20 h-10'/>} alt="" /> 
            </label>
            <input onChange={imagehandler}   className='w-72 p-2  rounded-lg' type="file"  name='image' id=" fileinput" />
        </div>
        <button onClick={()=> addProduct()} className='bg-blue-600 text-white mt-6 hover:bg-blue-700 px-12 py-2 rounded-md'>Add</button>
      </div>
           
           
    </div>
  )
}

export default Addproduct
