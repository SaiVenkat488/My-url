import React from "react";

export default function ProfilePage() {
  const user = {
    name: "Sai Venkat Reddy",
    id: "2210030488",
    mobile: "+91 7013263224",
    photo:
      "https://wallpapers.com/images/featured/cool-profile-pictures-4co57dtwk64fb7lv.jpg", // replace with actual profile photo URL
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-10 w-full max-w-sm">
        {/* Profile Image */}
        <img
          src={user.photo}
          alt="Profile"
          className="w-10 h-10 rounded-full border-4 border-blue-500 shadow-md"
        />

        {/* User Details */}
        <h2 className="mt-6 text-2xl font-bold text-gray-800">{user.name}</h2>
        <p className="text-gray-600 text-lg">ID: {user.id}</p>
        <p className="text-gray-600 text-lg">Mobile: {user.mobile}</p>
      </div>
    </div>
  );
}
