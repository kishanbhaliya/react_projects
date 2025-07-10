import axios from "axios";

const API = "https://localhost:8000";

export const getHabits = () => axios.get(`${API}/habits`);
export const addHabit = (name) => axios.post(`${API}/habits`, { name});
export const markDone = (name) => axios.post(`${API}/habits/${name}/done`);
