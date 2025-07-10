import React, { useEffect, useState } from "react";
import { getHabits, addHabit, markDone } from "./api";
import AddHabitForm from "./components/AddHabitForm";
import HabitList from "./components/HabitList";

function App() {
  const [habits, setHabits] = useState([]);

  const loadHabits = () => {
    getHabits().then((res) => setHabits(res.data));
  };

  const handleAdd = (name) => {
    addHabit(name).then(loadHabits);
  };

  const handleMarkDone = (name) => {
    markDone(name).then(loadHabits);
  };

  useEffect(() => {
    loadHabits();
  }, []);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🔥 Habit Tracker</h1>
      <AddHabitForm onAdd={handleAdd} />
      <HabitList habits={habits} onMarkDone={handleMarkDone} />
    </div>
  );
}

export default App;
