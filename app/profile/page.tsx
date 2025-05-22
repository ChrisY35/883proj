const sampleProfile = {
  name: "Alex Johnson",
  department: "IT Services",
  email: "alex.johnson@company.com",
  role: "Employee",
  badges: [
    { label: "Wellness Starter", color: "bg-green-200 text-green-800" },
    { label: "Yoga Enthusiast", color: "bg-blue-200 text-blue-800" },
  ],
};

export default function ProfilePage() {
  return (
    <div className="max-w-md mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">User Profile</h1>
      <div className="rounded-xl shadow-lg bg-white p-6 border border-gray-200 mb-6">
        <div className="mb-2 text-lg font-semibold">{sampleProfile.name}</div>
        <div className="text-gray-600 mb-1">Department: {sampleProfile.department}</div>
        <div className="text-gray-600 mb-1">Email: {sampleProfile.email}</div>
        <div className="text-gray-600 mb-3">Role: {sampleProfile.role}</div>
        <div className="flex flex-wrap gap-2 mt-2">
          {sampleProfile.badges.map((badge, i) => (
            <span key={i} className={`px-3 py-1 rounded-full text-xs font-semibold ${badge.color}`}>{badge.label}</span>
          ))}
        </div>
      </div>
    </div>
  );
} 