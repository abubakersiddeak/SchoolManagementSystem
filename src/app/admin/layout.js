// app/admin/layout.jsx or components/AdminLayout.jsx

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav>
          <ul>
            <li>
              <a href="/admin/dashboard" className="block py-2">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/admin/students" className="block py-2">
                Students
              </a>
            </li>
            <li>
              <a href="/admin/teachers" className="block py-2">
                Teachers
              </a>
            </li>
            <li>
              <a href="/admin/classes" className="block py-2">
                Classes
              </a>
            </li>
            <li>
              <a href="/admin/notices" className="block py-2">
                Notices
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">{children}</main>
    </div>
  );
}
