import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Calendar from "./pages/Calendar";
import Plans from "./pages/Plans";
import Notes from "./pages/Notes";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import AtoN from "./pages/AtoN";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/aton" element={<AtoN />} />
      <Route path="*" element={<NotFound />} />
      
    </Routes>
  );
}

export default App;
