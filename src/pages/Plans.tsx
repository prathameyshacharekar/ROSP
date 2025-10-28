import React from "react";
import { Link } from "react-router-dom";

const Plans: React.FC = () => {
  // Dummy study plans
  const plans = [
    { title: "Math Revision", description: "Algebra and Calculus exercises" },
    { title: "Network Concepts", description: "Study OSI & TCP/IP layers" },
    { title: "OS Assignment", description: "Complete practical tasks" },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📝 My Study Plans</h2>
      <div style={styles.list}>
        {plans.map((plan, index) => (
          <div key={index} style={styles.card}>
            <h3>{plan.title}</h3>
            <p>{plan.description}</p>
            <Link to="#" style={styles.link}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "20px",
    textAlign: "center",
    background: "linear-gradient(135deg, #add9ffff, #33cf93ff)",
    height: "100vh",
  },
  title: {
    fontSize: "36px",
    marginBottom: "20px",
  },
  list: {
    paddingTop: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    alignItems: "center",
  },
  card: {
    width: "300px",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    background: "#dcefffff",
    textAlign: "left",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  link: {
    textDecoration: "none",
    color: "#007bff",
    fontWeight: "bold",
  },
};

export default Plans;
