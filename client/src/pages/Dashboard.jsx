import React, { useState, useEffect } from 'react';
import { Alert, Button, Card, Spinner } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Fetch dashboard data from the backend API
        const response = await fetch('/api/dashboard');
        if (!response.ok) {
          throw new Error('Failed to fetch dashboard data');
        }
        const data = await response.json();
        setDashboardData(data);
        setLoading(false);
      } catch (error) {
        setErrorMessage(error.message);
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner size="xl" />
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Alert color="failure" onDismiss={() => setErrorMessage(null)}>
          {errorMessage}
        </Alert>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-5">Dashboard</h1>
        {/* Render different sections of the dashboard based on the data */}
        {dashboardData && (
          <div>
            {/* Example: Render cards for different metrics */}
            {dashboardData.metrics.map((metric) => (
              <Card key={metric.title} className="mb-5">
                <h2 className="text-2xl font-semibold">{metric.title}</h2>
                <p>{metric.value}</p>
              </Card>
            ))}

            {/* Example: Render a list of recent activities */}
            <h2 className="text-2xl font-semibold">Recent Activities</h2>
            <ul>
              {dashboardData.activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>
        )}
        <Button className="mt-5" gradientDuoTone="cyanToBlue" onClick={() => navigate('/sign-in')}>
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
