import React, { useState } from "react";
import { Link } from "react-router-dom";   // 
import "./Login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Smart Study Planner - Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          id="email"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          id="password"
        />

        {/* ✅ simple navigation */}
        <Link to="/dashboard" id="button" style={{ textDecoration: "none" }}>
          Login
        </Link>
      </form>
    </div>
  );
};

export default Login;
