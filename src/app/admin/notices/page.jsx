import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Notices</h1>
      <button className="mb-4 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700">
        Add New Notice
      </button>
      <ul className="space-y-2">
        <li className="bg-white p-4 shadow rounded">
          <h2 className="font-semibold">📌 Exam Starts on 15th June</h2>
          <p className="text-sm text-gray-600">Published: June 10</p>
        </li>
        <li className="bg-white p-4 shadow rounded">
          <h2 className="font-semibold">📢 School will be closed on Eid</h2>
          <p className="text-sm text-gray-600">Published: June 5</p>
        </li>
      </ul>
    </div>
  );
}
