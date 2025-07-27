import { useEffect, useState } from 'react';
import { db } from '@/firebase';
import {
  collection,
  getDocs,
  updateDoc,
  doc
} from 'firebase/firestore';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAppointments = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'appointments'));
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setAppointments(data);
      console.log(data)
      setLoading(false);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      const ref = doc(db, 'appointments', id);
      await updateDoc(ref, { status });
      fetchAppointments(); // Refresh list after update
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="page">
      <h2>Appointments</h2>
      {loading ? (
        <p>Loading appointments...</p>
      ) : appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <div className="appointment-card-grid">
          {appointments.map(app => (
            <div key={app.id} className={`appointment-card ${app.status}`}>
              <div className="card-details">
                <h4>{app.name}</h4>
                <p><strong>Email:</strong> {app.email}</p>
                <p><strong>Reason:</strong> {app.reason}</p>
                <p><strong>Date:</strong> {app.date}</p>
                <p><strong>Time:</strong> {app.time}</p>
                <p><strong>Status:</strong> {app.status || 'pending'}</p>
              </div>
              <div className="card-actions">
                <button
                  className="btn-approve"
                  disabled={app.status === 'approved'}
                  onClick={() => handleStatusChange(app.id, 'approved')}
                >
                  Approve
                </button>
                <button
                  className="btn-deny"
                  disabled={app.status === 'rejected'}
                  onClick={() => handleStatusChange(app.id, 'rejected')}
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Appointments;
