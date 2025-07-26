import { Route, Router, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './Components/Auth/loginForm';
import Signup from './Components/Auth/SignUp';
import Dashboard from './Components/Dashboard';


import DashboardLayout from './components/DashboardLayout';
import DashboardHome from './pages/DashboardHome';
import Appointments from './pages/Appointments';
import Requests from './pages/Requests';


function App() {
  return (
//      <Routes>
//   <Route path="/" element={<Navigate to="/login" />} />
//   <Route path="/login" element={<Login />} />
//   <Route path="/Signup" element={<Signup />} />
//   <Route path="/Dashboard" element={<Dashboard />} />


// </Routes>
  <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="requests" element={<Requests />} />
      </Route>
    </Routes>
  );
}

export default App;
