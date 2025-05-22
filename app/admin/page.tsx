"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "../components/AuthContext";

const sampleFeedbacks = [
  {
    user: "employee1",
    program: "Lunchtime Yoga",
    rating: 5,
    comment: "Loved the session! Very relaxing and well organized.",
    date: "2024-06-01",
  },
  {
    user: "employee2",
    program: "Soccer League",
    rating: 4,
    comment: "Fun games, but could use more time for warm-up.",
    date: "2024-05-30",
  },
  {
    user: "employee3",
    program: "Mindful Eating Workshop",
    rating: 5,
    comment: "Great tips! I learned a lot about healthy eating.",
    date: "2024-05-28",
  },
];

const sampleRegistrations = [
  { program: "Lunchtime Yoga", count: 18 },
  { program: "Soccer League", count: 12 },
  { program: "Mindful Eating Workshop", count: 9 },
  { program: "Bowling Night", count: 7 },
];

export default function AdminPage() {
  const [showFeedback, setShowFeedback] = useState(true);
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // or a loading spinner

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Admin Dashboard</h1>
      <div className="flex gap-4 justify-center mb-6">
        <button
          className={`btn btn-sm ${showFeedback ? "btn-primary" : "btn-outline"}`}
          onClick={() => setShowFeedback(true)}
        >
          Feedbacks
        </button>
        <button
          className={`btn btn-sm ${!showFeedback ? "btn-primary" : "btn-outline"}`}
          onClick={() => setShowFeedback(false)}
        >
          Registrations Chart
        </button>
      </div>
      {showFeedback ? (
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Recent Feedbacks</h2>
          <ul className="divide-y divide-gray-100">
            {sampleFeedbacks.map((fb, i) => (
              <li key={i} className="py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <div className="font-semibold">{fb.program}</div>
                  <div className="text-xs text-gray-500">By {fb.user} on {fb.date}</div>
                  <div className="text-sm mt-1">{fb.comment}</div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">{'★'.repeat(fb.rating)}</span>
                  <span className="text-gray-400">{'★'.repeat(5 - fb.rating)}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Registrations per Program</h2>
          <div className="space-y-3">
            {sampleRegistrations.map((reg, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-40 text-left font-medium">{reg.program}</div>
                <div className="flex-1 bg-gray-100 rounded h-4 relative">
                  <div
                    className="bg-teal-400 h-4 rounded transition-all duration-500"
                    style={{ width: `${reg.count * 5}%`, minWidth: 8 }}
                  ></div>
                </div>
                <div className="w-8 text-right font-mono">{reg.count}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 