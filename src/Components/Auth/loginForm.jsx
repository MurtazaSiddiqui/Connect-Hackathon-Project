import React, { useState } from 'react';
import './Login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { auth } from '@/firebase';


// import loginImage from '../assets/login-image.jpg'; // ← Add your image in /assets folder

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
   const [error, setError] = useState('');
   const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

 const handleSubmit = async (e) => {
    e.preventDefault();
    setError();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("Logged in:", userCredential.user);

      navigate('/dashboard')
       
      // redirect or show dashboard
    } catch (err) {
      console.error(err.message);
      setError("Invalid email or password");
    }
  };
  

  return (
    <div className="login-wrapper">
      <div className="login-left">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Welcome Back</h2>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Sign In</button>

          <p className="signup-link">
            Don't have an account? <NavLink to="/SignUp">Sign Up</NavLink>

          </p>
        </form>
      </div>

      <div className="login-right">
        <img src="https://images.unsplash.com/photo-1465189684280-6a8fa9b19a7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D" alt="Login visual" />
      </div>
    </div>
  );
};

export default Login;
