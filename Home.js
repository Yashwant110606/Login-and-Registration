import React from "react";

function Home({ username, onLogout }) {
  return (
    <div className="home-container">
      <h2>Welcome, {username}! 🎉</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Home;
