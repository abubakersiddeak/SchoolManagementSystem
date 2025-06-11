import AdminLayout from "./layout";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Welcome, Admin!</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white shadow p-6 rounded">
          📚 Total Students: 120
        </div>
        <div className="bg-white shadow p-6 rounded">👩‍🏫 Total Teachers: 10</div>
        <div className="bg-white shadow p-6 rounded">🏫 Classes: 8</div>
      </div>
    </div>
  );
}
