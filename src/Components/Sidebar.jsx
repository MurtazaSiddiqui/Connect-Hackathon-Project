import { NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase';

import { TbDashboardFilled, TbFileReport } from "react-icons/tb";
import { FaCalendarDays } from "react-icons/fa6";
import { MdOutlineLogout } from "react-icons/md";

const Sidebar = () => {
  const navigate = useNavigate();

const handleLogout = async () => {
  try {
    await signOut(auth);
    // Optionally clear any localStorage/sessionStorage
    sessionStorage.clear(); 
    localStorage.clear();
    // Navigate and replace history
    navigate('/login', { replace: true });
  } catch (error) {
    console.error('Logout failed:', error);
  }
};

  return (
    <aside className="sidebar">
      <div className="logo-container">
        <h2 className="logo">Admin Panel</h2>
      </div>

      <nav className="nav-links">
        <NavLink to="/dashboard" className="nav-link">
          <span className="icon-link"><TbDashboardFilled className="nav-icon" /> Dashboard</span>
        </NavLink>

        <NavLink to="/dashboard/appointments" className="nav-link">
          <span className="icon-link"><FaCalendarDays className="nav-icon" /> Appointments</span>
        </NavLink>

        <NavLink to="/dashboard/requests" className="nav-link">
          <span className="icon-link"><TbFileReport className="nav-icon" /> Requests</span>
        </NavLink>

        


<button onClick={handleLogout} className="nav-link btn-logout" style={{ all: 'unset', cursor: 'pointer' }}>
  <span className="icon-link"><MdOutlineLogout className="nav-icon" /> Logout</span>
</button>
      </nav>

 
    </aside>
  );
};

export default Sidebar;
