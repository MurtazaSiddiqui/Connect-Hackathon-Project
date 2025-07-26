import { NavLink } from 'react-router-dom';
import { TbDashboardFilled, TbFileReport } from "react-icons/tb";
import { FaCalendarDays } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Admin Panel</h2>
      <nav>
        <NavLink to="/dashboard"><span className='icon-link'><TbDashboardFilled /> Dashboard </span></NavLink>
        <NavLink to="/dashboard/appointments"><span className='icon-link' ><FaCalendarDays /> Appointments</span></NavLink>
        <NavLink to="/dashboard/requests"><span className='icon-link'><TbFileReport />  Requests</span></NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
