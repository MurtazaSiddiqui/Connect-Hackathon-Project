import { Route, Router, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './Components/Auth/loginForm';
import Signup from './Components/Auth/SignUp';


import DashboardLayout from './components/DashboardLayout';
import DashboardHome from './pages/DashboardHome';
import Appointments from './pages/Appointments';
import Requests from './pages/Requests';
import ProtectedRoute from './ProtectedRoute';


function App() {
  return (
    <Routes>
      {/* Redirect root to login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected Dashboard layout */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        {/* Nested routes rendered inside DashboardLayout */}
        <Route index element={<DashboardHome />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="requests" element={<Requests />} />
      </Route>
    </Routes>
  );
}

export default App;
