import React, { useState } from 'react';

const TrackerForm = ({ onTrack }) => {
  const [pnr, setPnr] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pnr) onTrack(pnr);
  };

  return (
    <form onSubmit={handleSubmit} className="tracker-form">
      <input
        type="text"
        placeholder="Enter PNR / Booking ID"
        value={pnr}
        onChange={(e) => setPnr(e.target.value)}
        required
      />
      <button type="submit">Track</button>
    </form>
  );
};

export default TrackerForm;
