import { Route, Router, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './Components/Auth/loginForm';
import Signup from './Components/Auth/SignUp';
import Dashboard from './Components/Dashboard';

function App() {
  return (
     <Routes>
  <Route path="/" element={<Navigate to="/login" />} />
  <Route path="/login" element={<Login />} />
  <Route path="/Signup" element={<Signup />} />
  <Route path="/Dashboard" element={<Dashboard />} />


</Routes>
  );
}

export default App;
