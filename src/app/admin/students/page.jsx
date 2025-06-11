import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Students</h1>
      <button className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Add New Student
      </button>
      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="text-left p-2">Name</th>
            <th className="text-left p-2">Class</th>
            <th className="text-left p-2">Age</th>
            <th className="text-left p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-2">Rahim</td>
            <td className="p-2">10</td>
            <td className="p-2">15</td>
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
