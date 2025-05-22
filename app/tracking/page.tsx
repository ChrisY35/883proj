"use client";
import { useState } from "react";

const initialTracking = {
  diet: [
    { date: "2024-06-01", meal: "Chicken salad, apple, water" },
    { date: "2024-05-31", meal: "Oatmeal, banana, tea" },
  ],
  water: [
    { date: "2024-06-01", glasses: 7 },
    { date: "2024-05-31", glasses: 5 },
  ],
  smoking: [
    { date: "2024-06-01", cigarettes: 0 },
    { date: "2024-05-31", cigarettes: 2 },
  ],
  mental: [
    { date: "2024-06-01", exercise: "Breathing Exercise", completed: true },
    { date: "2024-05-31", exercise: "Gratitude Journal", completed: true },
  ],
};

export default function TrackingPage() {
  const [diet, setDiet] = useState(initialTracking.diet);
  const [showDietForm, setShowDietForm] = useState(false);
  const [dietMeal, setDietMeal] = useState("");

  const [water, setWater] = useState(initialTracking.water);
  const [showWaterForm, setShowWaterForm] = useState(false);
  const [waterGlasses, setWaterGlasses] = useState(1);

  const [smoking, setSmoking] = useState(initialTracking.smoking);
  const [showSmokingForm, setShowSmokingForm] = useState(false);
  const [smokingCigs, setSmokingCigs] = useState(0);

  const [mental, setMental] = useState(initialTracking.mental);
  const [showMentalForm, setShowMentalForm] = useState(false);
  const [mentalExercise, setMentalExercise] = useState("");
  const [mentalCompleted, setMentalCompleted] = useState(true);

  const today = new Date().toISOString().slice(0, 10);

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Wellness Tracking</h1>
      <div className="grid gap-6">
        {/* Diet Log */}
        <div className="rounded-xl shadow bg-white p-5 border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Diet Log</h2>
            <button className="btn btn-xs btn-primary transition-transform duration-200 active:scale-95 focus:ring" onClick={() => setShowDietForm((v) => !v)}>{showDietForm ? "Cancel" : "Add"}</button>
          </div>
          {showDietForm && (
            <form
              className="mb-3 flex flex-col gap-2 animate-fade-in transition-all duration-300"
              onSubmit={e => {
                e.preventDefault();
                if (dietMeal.trim()) {
                  setDiet([{ date: today, meal: dietMeal }, ...diet]);
                  setDietMeal("");
                  setShowDietForm(false);
                }
              }}
            >
              <input
                className="input input-bordered w-full"
                placeholder="Meal description"
                value={dietMeal}
                onChange={e => setDietMeal(e.target.value)}
              />
              <button className="btn btn-success btn-sm self-end transition-transform duration-200 active:scale-95 focus:ring" type="submit">Add</button>
            </form>
          )}
          <ul className="text-sm text-left">
            {diet.map((entry, i) => (
              <li key={i} className="mb-1 flex justify-between transition-colors duration-200 hover:bg-gray-50 rounded px-2 py-1">
                <span>{entry.date}</span>
                <span className="text-gray-600">{entry.meal}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Water Intake */}
        <div className="rounded-xl shadow bg-white p-5 border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Water Intake</h2>
            <button className="btn btn-xs btn-primary transition-transform duration-200 active:scale-95 focus:ring" onClick={() => setShowWaterForm((v) => !v)}>{showWaterForm ? "Cancel" : "Add"}</button>
          </div>
          {showWaterForm && (
            <form
              className="mb-3 flex flex-col gap-2 animate-fade-in transition-all duration-300"
              onSubmit={e => {
                e.preventDefault();
                setWater([{ date: today, glasses: waterGlasses }, ...water]);
                setWaterGlasses(1);
                setShowWaterForm(false);
              }}
            >
              <input
                type="number"
                min={1}
                className="input input-bordered w-full"
                placeholder="Number of glasses"
                value={waterGlasses}
                onChange={e => setWaterGlasses(Number(e.target.value))}
              />
              <button className="btn btn-success btn-sm self-end transition-transform duration-200 active:scale-95 focus:ring" type="submit">Add</button>
            </form>
          )}
          <ul className="text-sm text-left">
            {water.map((entry, i) => (
              <li key={i} className="mb-1 flex justify-between transition-colors duration-200 hover:bg-gray-50 rounded px-2 py-1">
                <span>{entry.date}</span>
                <span className="text-blue-700 font-semibold">{entry.glasses} glasses</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Smoking Log */}
        <div className="rounded-xl shadow bg-white p-5 border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Smoking Log</h2>
            <button className="btn btn-xs btn-primary transition-transform duration-200 active:scale-95 focus:ring" onClick={() => setShowSmokingForm((v) => !v)}>{showSmokingForm ? "Cancel" : "Add"}</button>
          </div>
          {showSmokingForm && (
            <form
              className="mb-3 flex flex-col gap-2 animate-fade-in transition-all duration-300"
              onSubmit={e => {
                e.preventDefault();
                setSmoking([{ date: today, cigarettes: smokingCigs }, ...smoking]);
                setSmokingCigs(0);
                setShowSmokingForm(false);
              }}
            >
              <input
                type="number"
                min={0}
                className="input input-bordered w-full"
                placeholder="Cigarettes"
                value={smokingCigs}
                onChange={e => setSmokingCigs(Number(e.target.value))}
              />
              <button className="btn btn-success btn-sm self-end transition-transform duration-200 active:scale-95 focus:ring" type="submit">Add</button>
            </form>
          )}
          <ul className="text-sm text-left">
            {smoking.map((entry, i) => (
              <li key={i} className="mb-1 flex justify-between transition-colors duration-200 hover:bg-gray-50 rounded px-2 py-1">
                <span>{entry.date}</span>
                <span className="text-red-700 font-semibold">{entry.cigarettes} cigarettes</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Mental Health */}
        <div className="rounded-xl shadow bg-white p-5 border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Mental Health</h2>
            <button className="btn btn-xs btn-primary transition-transform duration-200 active:scale-95 focus:ring" onClick={() => setShowMentalForm((v) => !v)}>{showMentalForm ? "Cancel" : "Add"}</button>
          </div>
          {showMentalForm && (
            <form
              className="mb-3 flex flex-col gap-2 animate-fade-in transition-all duration-300"
              onSubmit={e => {
                e.preventDefault();
                if (mentalExercise.trim()) {
                  setMental([{ date: today, exercise: mentalExercise, completed: mentalCompleted }, ...mental]);
                  setMentalExercise("");
                  setMentalCompleted(true);
                  setShowMentalForm(false);
                }
              }}
            >
              <input
                className="input input-bordered w-full"
                placeholder="Exercise name"
                value={mentalExercise}
                onChange={e => setMentalExercise(e.target.value)}
              />
              <label className="flex items-center gap-2 text-xs">
                <input
                  type="checkbox"
                  checked={mentalCompleted}
                  onChange={e => setMentalCompleted(e.target.checked)}
                />
                Completed
              </label>
              <button className="btn btn-success btn-sm self-end transition-transform duration-200 active:scale-95 focus:ring" type="submit">Add</button>
            </form>
          )}
          <ul className="text-sm text-left">
            {mental.map((entry, i) => (
              <li key={i} className="mb-1 flex justify-between transition-colors duration-200 hover:bg-gray-50 rounded px-2 py-1">
                <span>{entry.date}</span>
                <span className={entry.completed ? "text-green-700 font-semibold" : "text-gray-500"}>{entry.exercise} {entry.completed ? "✓" : ""}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 