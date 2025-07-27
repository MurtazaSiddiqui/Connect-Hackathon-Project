import { useEffect, useState } from 'react';
import { db } from '@/firebase';

import {
  collection,
  getDocs,
  updateDoc,
  doc
} from 'firebase/firestore';

const Requests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchRequests = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'helpRequests'));
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setRequests(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching requests:', error);
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      const ref = doc(db, 'helpRequests', id);
      await updateDoc(ref, { status });
      fetchRequests(); // refresh

    } catch (err) {
      console.error('Error updating request status:', err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="page ">

      <h2>Help Requests</h2>

      {loading ? (
        <p>Loading requests...</p>
      ) : requests.length === 0 ? (
        <p>No help requests found.</p>
      ) : (
        <ul className=''>
          {requests.map(req => (
            <li
              key={req.id}
              className={`request ${
                req.status === 'approved'
                  ? 'approved'
                  : req.status === 'rejected'
                  ? 'denied'
                  : ''
              }` }
              
              style={{
                marginBottom: '1.5rem',
                padding: '1rem',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.05)',
                color: '#fff',
              }}
            >
              <p>
              
                <strong>Name:</strong> {req.name || 'N/A'} <br />
                <strong>Email:</strong> {req.email || 'N/A'}<br />
                
                <strong>Type:</strong> {req.type}<br />
                <strong>Description:</strong> {req.description}<br />
                <strong>Status:</strong>{' '}
                <span style={{ textTransform: 'capitalize' }}>
                  {req.status || 'pending'}
                </span>
              </p>
              <div style={{ marginTop: '1rem' }}>
                <button
                  className="btn-approve"
                  disabled={req.status === 'approved'}
                  onClick={() => handleStatusChange(req.id, 'approved')}
                >
                  Approve
                </button>{' '}
                <button
                  className="btn-deny"
                  disabled={req.status === 'rejected'}
                  onClick={() => handleStatusChange(req.id, 'rejected')}
                >
                  Deny
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Requests;
