import React, { useState } from "react";

export default function AddHabitForm({ onAdd }) {
    const [habit, setHabit] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (habit.trim()) {
            onAdd(habit);
            setHabit("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-2">
            <input
                value={habit}
                onChange={(e) => setHabit(e.target.value)}
                placeholder="New Habit"
                className="border p-2 rounded mr-2"
            />
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
                Add
            </button>
        </form>
    );
}