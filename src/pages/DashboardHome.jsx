import { useEffect, useState } from 'react';
import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';

const DashboardHome = () => {
  const [totalAppointments, setTotalAppointments] = useState(0);
  const [completedAppointments, setCompletedAppointments] = useState(0);
  const [completionRatio, setCompletionRatio] = useState('0%');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'appointments'));
        const allAppointments = snapshot.docs.map(doc => doc.data());

        const total = allAppointments.length;
        const completed = allAppointments.filter(app => app.status === 'approved').length;
        const ratio = total > 0 ? `${Math.round((completed / total) * 100)}%` : '0%';

        setTotalAppointments(total);
        setCompletedAppointments(completed);
        setCompletionRatio(ratio);
      } catch (err) {
        console.error('Error fetching appointment stats:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="page">
      <h2>Dashboard Overview</h2>
      <div className="cards">
        <div className="card">
          <h4>Total Appointments</h4>
          <p>{totalAppointments}</p>
        </div>
        <div className="card">
          <h4>Completed</h4>
          <p>{completedAppointments}</p>
        </div>
        <div className="card">
          <h4>Completion Ratio</h4>
          <p>{completionRatio}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
