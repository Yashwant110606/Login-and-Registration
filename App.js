import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [user, setUser] = useState(localStorage.getItem("loggedInUser"));
  const [page, setPage] = useState("login");

  const handleLogin = (username) => {
    setUser(username);
    localStorage.setItem("loggedInUser", username);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    setPage("login");
  };

  return (
    <div className="app-container">
      <h1>Login & Registration</h1>

      {!user ? (
        <>
          {page === "login" ? (
            <Login onLogin={handleLogin} onNavigate={() => setPage("register")} />
          ) : (
            <Register onNavigate={() => setPage("login")} />
          )}
        </>
      ) : (
        <Home username={user} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
