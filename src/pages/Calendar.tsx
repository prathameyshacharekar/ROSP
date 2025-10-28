import React, { useState } from "react";

interface Event {
  date: string;
  subject: string;
  time: string;
}

const Calendar: React.FC = () => {
  const [schedule, setSchedule] = useState<Event[]>([
    { date: "2025-09-21", subject: "Mathematics - Algebra", time: "10:00 AM" },
    { date: "2025-09-22", subject: "Computer Networks", time: "2:00 PM" },
  ]);

  const [newEvent, setNewEvent] = useState<Event>({
    date: "",
    subject: "",
    time: "",
  });

  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleAddOrUpdateEvent = () => {
    if (!newEvent.date || !newEvent.subject || !newEvent.time) {
      alert("Please fill all fields!");
      return;
    }

    if (editIndex !== null) {
      // Update existing event
      const updated = [...schedule];
      updated[editIndex] = newEvent;
      setSchedule(updated);
      setEditIndex(null);
    } else {
      // Add new event
      setSchedule([...schedule, newEvent]);
    }

    setNewEvent({ date: "", subject: "", time: "" }); // reset form
  };

  const handleEdit = (index: number) => {
    setNewEvent(schedule[index]);
    setEditIndex(index);
  };

  const handleDelete = (index: number) => {
    const updated = schedule.filter((_, i) => i !== index);
    setSchedule(updated);
  };

  const today = new Date().toISOString().split('T')[0]; // Gets YYYY-MM-DD format for today

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📅 Study Calendar</h2>

      {/* Add/Edit Event Form */}
      <div style={styles.form}>
        <input
          type="date"
          name="date"
          value={newEvent.date}
          min={today}  // Prevent selecting past dates
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="subject"
          placeholder="Enter Subject/Task"
          value={newEvent.subject}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="time"
          name="time"
          value={newEvent.time}
          onChange={handleChange}
          style={styles.input}
        />
        <button onClick={handleAddOrUpdateEvent} style={styles.button}>
          {editIndex !== null ? "✏️ Update Event" : "➕ Add Event"}
        </button>
      </div>

      {/* Event List */}
      <div style={styles.list}>
        {schedule.map((item, index) => (
          <div key={index} style={styles.card}>
            <p>
              <strong>Date:</strong> {item.date}
            </p>
            <p>
              <strong>Subject:</strong> {item.subject}
            </p>
            <p>
              <strong>Time:</strong> {item.time}
            </p>
            <div style={styles.actions}>
              <button
                style={styles.editBtn}
                onClick={() => handleEdit(index)}
              >
                ✏️ Edit
              </button>
              <button
                style={styles.deleteBtn}
                onClick={() => handleDelete(index)}
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: "absolute",
    padding: "20px",
    textAlign: "center",
    background: "linear-gradient(135deg, #add9ffff, #33cf93ff)",
    minHeight: "100vh",
    width: "100%",
  },
  title: {
    fontSize: "36px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
    flexWrap: "wrap",
  },
  input: {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    minWidth: "150px",
  },
  button: {
    padding: "8px 15px",
    border: "none",
    borderRadius: "5px",
    background: "#007bff",
    color: "#fff",
    cursor: "pointer",
  },
  list: {
    paddingTop: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    alignItems: "center",
  },
  card: {
    display: "block",
    width: "300px",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    background: "#f9f9f9",
    textAlign: "left",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  actions: {
    marginTop: "10px",
    display: "flex",
    gap: "10px",
  },
  editBtn: {
    padding: "5px 10px",
    border: "none",
    borderRadius: "5px",
    background: "#ffc107",
    cursor: "pointer",
    color: "#000",
  },
  deleteBtn: {
    padding: "5px 10px",
    border: "none",
    borderRadius: "5px",
    background: "#dc3545",
    cursor: "pointer",
    color: "#fff",
  },
};

export default Calendar;
