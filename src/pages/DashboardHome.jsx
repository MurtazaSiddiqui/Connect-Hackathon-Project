const DashboardHome = () => {
  return (
    <div className="page">
      <h2>Dashboard Overview</h2>
      <div className="cards">
        <div className="card">
          <h4>Total Appointments</h4>
          <p>132</p>
        </div>
        <div className="card">
          <h4>Completed</h4>
          <p>87</p>
        </div>
        <div className="card">
          <h4>Completion Ratio</h4>
          <p>66%</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
