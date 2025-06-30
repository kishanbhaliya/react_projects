import React, { useState, useEffect } from 'react';
import TrackerForm from './components/TrackerForm';
import StatusProgress from './components/StatusProgress';
import HistoryList from './components/HistoryList';

const App = () => {
  const [status, setStatus] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('luggage_history') || '[]');
    setHistory(storedHistory);
  }, []);

  const handleTrack = (pnr) => {
    const mockStatuses = ['Checked In', 'Loaded', 'In Transit', 'Delivered'];
    const randomStatus = mockStatuses[Math.floor(Math.random() * mockStatuses.length)];
    const timestamp = new Date().toLocaleString();

    setStatus(randomStatus);

    const newEntry = { pnr, status: randomStatus, timestamp };
    const updatedHistory = [...history, newEntry];
    localStorage.setItem('luggage_history', JSON.stringify(updatedHistory));
    setHistory(updatedHistory);
  };

  return (
    <div className="app-container">
      <h1>Airline Luggage Tracker</h1>
      <TrackerForm onTrack={handleTrack} />
      {status && <StatusProgress currentStatus={status} />}
      <HistoryList history={history} />
    </div>
  );
};

export default App;