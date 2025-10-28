import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Smart Study Planner.. 📚</h1>
      <p style={styles.subtitle}>
        Plan smarter. Study better. Track your progress with ease.
      </p>
      <div style={styles.buttonGroup}>
        <Link to="/login" style={{ ...styles.button, background: "#007bff" }}>
          Login
        </Link>
        <Link
          to="/register"
          style={{ ...styles.button, background: "#28a745" }}
        >
          Register
        </Link>
      </div>
      <p style={styles.subtitle1}>
        A Project by Team Claws !
      </p>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #77b6eeff, #4ee5abff)",
    textAlign: "center",
    padding: "20px",
  },
  title: {
    position: "relative",
    fontSize: "45px",
    fontWeight: "bold",
    color: "#000000ff",
    marginBottom: "15px",
    top: "-140px",
    left: "20px",
  },
  subtitle: {
    position: "relative",
    top: "-120px",
    fontSize: "20px",
    color: "#4d4747ff",
    marginBottom: "10px",
  },
  subtitle1: {
    position: "relative",
    top: "-20px",
    fontSize: "20px",
    color: "#655b5bff",
    marginBottom: "30px",
  },
  buttonGroup: {
    position: "relative",
    display: "grid",
    gap: "45px",
    top: "-70px"
  },
  button: {
    padding: "12px 20px",
    fontSize: "20px",
    fontWeight: "bold",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px",
    transition: "0.3s",
    width: "100px",
    height: "18px",
    paddingBottom: "20px",
  },
};
