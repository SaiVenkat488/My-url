import React from "react";
import profilePic from "./assets/Profile.jpg";

export default function ProfilePage() {
  const user = {
    name: "Sai Venkat Reddy",
    id: "2210030xxx",
    mobile: "+91 701xxxx224",
    photo: {profilePic}, // Coin-size image
  };

  return (
    <>
      <style>{`
        .profile-container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f3f4f6;
        }
        .profile-card {
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          text-align: center;
          width: 280px;
        }
        .profile-img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 2px solid #3b82f6;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
          margin-bottom: 15px;
        }
        .profile-name {
          font-size: 20px;
          font-weight: bold;
          color: #333;
          margin: 10px 0;
        }
        .profile-detail {
          font-size: 16px;
          color: #666;
          margin: 4px 0;
        }
      `}</style>

      <div className="profile-container">
        <div className="profile-card">
          {/* Profile Image */}
          <img src={user.photo} alt="Profile" className="profile-img" />

          {/* User Details */}
          <h2 className="profile-name">{user.name}</h2>
          <p className="profile-detail">ID: {user.id}</p>
          <p className="profile-detail">Mobile: {user.mobile}</p>
        </div>
      </div>
    </>
  );
}
