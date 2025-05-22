const samplePrograms = [
  {
    id: 1,
    name: "Lunchtime Yoga",
    category: "Wellness",
    description: "A relaxing yoga session to improve flexibility and reduce stress.",
    time: "Mon, Wed, Fri 12:30pm",
  },
  {
    id: 2,
    name: "Soccer League",
    category: "Recreational",
    description: "Join our friendly soccer matches every week!",
    time: "Tuesdays 5:30pm",
  },
  {
    id: 3,
    name: "Mindful Eating Workshop",
    category: "Wellness",
    description: "Learn healthy eating habits and mindful techniques.",
    time: "Thursdays 1:00pm",
  },
  {
    id: 4,
    name: "Bowling Night",
    category: "Recreational",
    description: "Team up for a fun night of bowling.",
    time: "Fridays 7:00pm",
  },
];

const badgeColor = (category: string) =>
  category === "Wellness"
    ? "bg-green-100 text-green-700"
    : "bg-blue-100 text-blue-700";

export default function ProgramsPage() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Program Catalog</h1>
      <div className="grid gap-6">
        {samplePrograms.map((program) => (
          <div
            key={program.id}
            className="rounded-xl shadow-lg bg-white p-6 border border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex-1 text-left">
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${badgeColor(program.category)}`}>{program.category}</div>
              <h2 className="text-lg font-semibold mb-1">{program.name}</h2>
              <p className="text-gray-600 mb-1">{program.description}</p>
              <p className="text-sm text-gray-400">{program.time}</p>
            </div>
            <button className="btn btn-primary self-start md:self-center">Register</button>
          </div>
        ))}
      </div>
    </div>
  );
} 