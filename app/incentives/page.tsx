const sampleIncentives = {
  points: 35,
  badges: [
    { label: "Hydration Hero", color: "bg-blue-100 text-blue-700" },
    { label: "Smoke-Free Week", color: "bg-yellow-100 text-yellow-700" },
    { label: "Active Participant", color: "bg-green-100 text-green-700" },
  ],
};

export default function IncentivesPage() {
  return (
    <div className="max-w-md mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Incentive Dashboard</h1>
      <div className="rounded-xl shadow-lg bg-white p-6 border border-gray-200 mb-6 text-center">
        <div className="text-lg font-semibold mb-2">Total Points</div>
        <div className="text-4xl font-bold text-green-600 mb-4">{sampleIncentives.points}</div>
        <div className="text-lg font-semibold mb-2">Badges Earned</div>
        <div className="flex flex-wrap gap-2 justify-center">
          {sampleIncentives.badges.map((badge, i) => (
            <span key={i} className={`px-3 py-1 rounded-full text-xs font-semibold ${badge.color}`}>{badge.label}</span>
          ))}
        </div>
      </div>
    </div>
  );
} 