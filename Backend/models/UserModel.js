const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  
  name: {
    type: String,
  },
  email : {
    type : String, 
    unique : true,
  },
  password : {
    type : String,
  },
  cartdata : {
    type : Object,
  },
  Date : {
    type : Date,
    Default : Date.now
  }

});

const User = mongoose.model("User", userSchema);

module.exports = User;
