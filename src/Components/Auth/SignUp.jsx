import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';
import './Login.css'; // Reuse same styles
import { NavLink, useNavigate  } from 'react-router-dom';




const Signup = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      setMessage('Account created! You can now log in.');
      navigate('/login');
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-left">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Create Account</h2>

          {message && <p className="success-message">{message}</p>}
          {error && <p className="error-message">{error}</p>}



          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Sign Up</button>

          <p className="signup-link">
            Already have an account? 
            <NavLink to="/login">Login</NavLink>
            

          </p>
        </form>
      </div>

      <div className="login-right">
        <img src="https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" alt="Signup Visual" />
      </div>
    </div>
  );
};

export default Signup;
