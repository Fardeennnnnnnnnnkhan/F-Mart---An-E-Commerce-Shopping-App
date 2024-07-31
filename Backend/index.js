const PORT = 3000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const path = require('path');
const cors = require('cors');
const db = require('../Backend/config/mongooseConnection');
const productmodel = require('../Backend/models/Productmodels')
const userModel = require('../Backend/models/UserModel');
const { error } = require('console');
app.use(cors());
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db();

app.get('/', function (req, res) {
  res.send('Heyyeyeyeye');
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'upload/images'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

app.use('/images', express.static(path.join(__dirname, 'upload/images')));

app.post('/upload', upload.single('product'), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${PORT}/images/${req.file.filename}`,
  });
});


app.post('/addproduct', async (req, res) => {
    try {
       let products = await productmodel.find({})
       let id ;
       if(products.length>0){
         let last_product_array = products.slice(-1)
         let last_product = last_product_array[0]
         id = last_product.id+1 
         console.log(id)
       }
else{
  id=1 ; 
}
      let product = await productmodel.create({
        id :id ,
        name: req.body.name,
        available: req.body.available,
        newPrice: req.body.newPrice,
        oldPrice: req.body.oldPrice,
        category: req.body.category,
        image: req.body.image,
     
      });
  
      console.log(product);
      console.log("SAVED PRODUCT");
  
      res.json({
        success: true,
        name: req.body.name
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        message: 'Error saving product'
      });
    }
  });

  app.post('/removeproduct' , async (req , res)=>{
   let removedProduct = await productmodel.findOneAndDelete({id : req.body.id})
   console.log(removedProduct)
   res.json({
    success: true,
    name: req.body.name
  });
  })

  app.get('/allproducts' , async(req , res)=>{
    let products =  await productmodel.find({})
  res.send(products)
   console.log("ALL PRODUCTS FETCHED")
  })



// SignUP =>

  app.post('/signup', async (req, res) => {
    try {
      const existingUser = await userModel.findOne({ email: req.body.email });
      if (existingUser) {
        return res.status(400).json({ success: false, error: "The User Already Exists. Please Login" });
      }
  
      let cart = {};
      for (let i = 0; i < 300; i++) {
        cart[i] = 0;
      }
  
      const newUser = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        cartdata: cart,
      });
  
      await newUser.save();
  
      const tokenData = {
        user: {
          id: newUser.id
        }
      };
      const token = jwt.sign(tokenData, "secret_ecom");
  
      res.json({ success: true, message: "User Created", token });
    } catch (error) {
      console.error('Error during user signup:', error);
      res.status(500).json({ success: false, error: "Server Error" });
    }
  });
  
  
  

  // Login

  app.post('/login' ,async  (req , res)=>{
    
    let user = await  userModel.findOne({ email : req.body.email})

    if(user){
     let passCompare = req.body.password === user.password
     if(passCompare){
      const data = {
        user : {
         id : user.id
        }
     }
 
     const token  = jwt.sign(data , "secret_ecom")
     res.json({success : true , message : "User Created" , token})
     }
     else{
         res.status(400).json({message : 'Wrong Password' , succces : false })
     }
    }
    else{
      res.status(400).json({message : "The User Does Not Exist " , success : false})
    }
  })

// New Collection

app.get('/newcollection' , async  (req , res)=>{
  let products = await productmodel.find({category : 'kids' && 'men'})
  let newCollection = products.slice(0).slice(-8)
  console.log("New Collection Fetched")
  res.send(newCollection)
})

// Popular in Women

app.get('/popularinwomen' , async  (req , res)=>{
  let products = await productmodel.find({category : 'women'})
  let womenCollection = products.slice(0,3)
  res.send(womenCollection)
})

const fetchuser = (req , res , next)=>{
 const token = req.header('auth-token')

 if(!token){
  res.status(401).send({errors : "Please Authenticate using Valid Tokens" })
 }
 else{
  try{
  const data = jwt.verify(token , 'secret_ecom')
  req.user = data.user
  next()
  }catch(err){
    res.status(401).send({errors : " Please Authneticate using a validate Token" })
  }
 }
}

app.post('/addtocart' , async (req,res)=>{
  console.log(req.body , req.user)
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
