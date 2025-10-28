import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>📘 Smart Study</h2>
        <nav style={styles.nav}>
          <Link to="/calendar" style={styles.navLink}>📅 Calendar</Link>
          <Link to="/plans" style={styles.navLink}>📝 Study Plans</Link>
          <Link to="/notes" style={styles.navLink}>📒 Notes</Link>
          <Link to="/aton" style={styles.navLink}>🎤 Audio to Notes</Link>
          <Link to="/analytics" style={styles.navLink}>📊 Analytics</Link>
          <Link to="/profile" style={styles.navLink}>👤 Profile</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={styles.main}>
        <h1 style={styles.heading}>Welcome to Your Dashboard 🎓</h1>
        <p style={styles.subtitle}>
          Manage your study plans, notes, and track progress all in one place.
        </p>

        <div style={styles.cards}>
          <Link to="/calendar" style={{ ...styles.card, background: "#fce4ec" }}>
            <h3>📅 Calendar</h3>
            <p>View and organize your study schedule.</p>
          </Link>

          <Link to="/plans" style={{ ...styles.card, background: "#e3f2fd" }}>
            <h3>📝 Study Plans</h3>
            <p>Create and manage personalized study plans.</p>
          </Link>

          <Link to="/notes" style={{ ...styles.card, background: "#fff3e0" }}>
            <h3>📒 Notes</h3>
            <p>Write, save, and organize your notes.</p>
          </Link>

          <Link to="/aton" style={{ ...styles.card, background: "#ede7f6" }}>
						<h3>🎤 Audio to Notes</h3>
						<p>Upload an audio file (max 5 MB) and get a notes PDF instantly.</p>
					</Link>

          <Link to="/analytics" style={{ ...styles.card, background: "#e8f5e9" }}>
            <h3>📊 Analytics</h3>
            <p>Track your learning progress with insights.</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
    
  },
  sidebar: {
    width: "220px",
    background: "#1e293b",
    color: "white",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    marginBottom: "30px",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    padding: "8px",
    borderRadius: "4px",
    transition: "0.3s",
  },
  main: {
    flex: 1,
    padding: "30px",
    background: "linear-gradient(135deg, #add9ffff, #33cf93ff)",
    overflowY: "auto",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "30px",
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  card: {
    padding: "20px",
    borderRadius: "8px",
    textDecoration: "none",
    color: "#333",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    transition: "transform 0.2s",
  },
};
