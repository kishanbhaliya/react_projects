import React from "react";

export default function HabitList({ habits, onMarkDone }) {
  return (
    <div className="mt-4">
      {habits.map((h) => (
        <div key={h.name} className="p-3 border rounded mb-2 shadow">
          <h2 className="text-xl font-semibold">{h.name}</h2>
          <p>✅ Days Done: {h.days_done}</p>
          <p>🔥 Streak: {h.streak}</p>
          <p>❌ Missed: {h.missed}</p>
          <button
            className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
            onClick={() => onMarkDone(h.name)}
          >
            Mark Done Today
          </button>
        </div>
      ))}
    </div>
  );
}
