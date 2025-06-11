import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Teachers</h1>
      <button className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
        Add New Teacher
      </button>
      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="text-left p-2">Name</th>
            <th className="text-left p-2">Subject</th>
            <th className="text-left p-2">Phone</th>
            <th className="text-left p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-2">Ms. Jahan</td>
            <td className="p-2">Math</td>
            <td className="p-2">017xxxxxxxx</td>
            <td className="p-2">
              <button className="text-blue-600 hover:underline">Edit</button> |
              <button className="text-red-600 hover:underline">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
