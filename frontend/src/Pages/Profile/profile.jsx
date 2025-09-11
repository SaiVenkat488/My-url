import React from "react";

export default function ProfilePage() {
  const user = {
    name: "Sai Venkat Reddy",
    id: "2210030488",
    mobile: "+91 7013xxxxx",
    photo:
      "https://www.bing.com/th/id/OIP.9lp-AzhvWVzYdKMb9E8tLQHaHs?w=215&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", // smaller image placeholder
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-8 w-full max-w-xs text-center">
        {/* Profile Image */}
        <img
          src={user.photo}
          alt="Profile"
          className="w-24 h-24 rounded-full border-2 border-blue-500 shadow-md"
        />

        {/* User Details */}
        <h2 className="mt-4 text-xl font-bold text-gray-800">{user.name}</h2>
        <p className="text-gray-600">ID: {user.id}</p>
        <p className="text-gray-600">Mobile: {user.mobile}</p>
      </div>
    </div>
  );
}
