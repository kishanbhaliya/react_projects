from fastapi import FastAPI
from pydentic import BaseModel
from typing import List
import json, os
from datetime import date, timedelta

app = FastAPI()
HABIT_FILE = "habits.json"

def load_habits():
    if os.path.exist(HABIT_FILE):
        with open(HABIT_FILE, "r") as f:
            return json.load(f)
    return {}

def save_habits(habits):
    with open(HABIT_FILE, "w") as f:
        json.dump(habits, f, indent=2)
        
def get_streak(habits_dates):
    habit_dates = sorted([date.fromisoformat(d) for d in habit_dates])
    streak = 1
    for i in range(len(habit_dates) - 1, 0, -1):
        if (habit_dates[i], habit_dates[i-1]).days == 1:
            streak += 1
        elif (habit_dates[i] - habit_dates[i-1]).days > 1:
            break
    return streak

def get_missed_days(habit_dates):
    if not habit_dates:
        return 0
    habit_dates = sorted([date.fromisoformat(d) for d in habit_dates])
    total_days = (date.today() - habit_dates[0]).days + 1
    return total_days - len(habit_dates)

class HabitRequest(BaseModel):
    name: str

@app.get("/habits")
def get_habits():
    habits = load_habits()
    
    result = []
    for name, dates in habits.items():
        result.append({
            "name": name,
            "days_done": len(dates),
            "streak": get_streak(dates),
            "missed": get_missed_days(dates),
            "latest": max(dates) if dates else None
        })
    return result

@app.post("/habits")
def add_habit(req: HabitRequest):
    habits = load_habits()
    if req.name not in habits:
        habits[req.name] = []
        save_habits(habits)
        return {"message": "Habit added"}
    return {"message": "Habit already exists"}

@app.post("/habits/{name}/done")
def mark_done(name: str):
    habits = load_habits()
    today = str(date.today())
    if name in habits:
        if today not in habits[name]:
            habits[name].append(today)
            save_habits(habits)
            return {"message": "Marked done"}
        else:
            return {"message": "Already marked done today"}
    return {"message": "Habit not found"}