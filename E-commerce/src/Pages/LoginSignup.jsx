import React, { useState } from 'react';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      login();
    } else {
      signup();
    }
  };

  const login = async () => {
    console.log('Login Data:', formData);

    
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      const responseData = await response.json();
  
      if (responseData.success) {
        console.log(responseData);
        localStorage.setItem("auth-token", responseData.token);
        window.location.replace("/");
      } else {
       alert(responseData.error); 
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  const signup = async () => {
    console.log('Signup Data:', formData);
  
    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      const responseData = await response.json();
  
      if (responseData.success) {
        console.log(responseData);
        localStorage.setItem("auth-token", responseData.token);
        window.location.replace("/");
      } else {
       alert(responseData.error); 
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };
  

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="username">Username</label>
                <input
                  onChange={changeHandler}
                  value={formData.username}
                  type="text"
                  name="username"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-600"
                  required={!isLogin}
                />
              </div>
            )}
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              onChange={changeHandler}
              value={formData.email}
              type="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input
              onChange={changeHandler}
              value={formData.password}
              type="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-600"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p className="mt-4 text-center text-gray-500">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <button
            className="text-green-600 hover:underline ml-1"
            onClick={toggleForm}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
