import React from 'react';

const HistoryList = ({ history }) => {
  return (
    <div className="history-list">
      <h2>Tracking History</h2>
      {history.length === 0 ? (
        <p>No history yet.</p>
      ) : (
        <ul>
          {history.map((item, idx) => (
            <li key={idx}>
              <strong>PNR:</strong> {item.pnr} | <strong>Status:</strong> {item.status} | <strong>Time:</strong> {item.timestamp}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HistoryList;