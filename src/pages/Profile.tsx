import React, { useState } from "react";

const Profile: React.FC = () => {
	const [name, setName] = useState("Pratham Arlekar");
	const [email, setEmail] = useState("pratham@example.com");
	const [contact, setContact] = useState("9876543210");
	const [editing, setEditing] = useState(false);

	const toggleEdit = () => setEditing(!editing);

	const handleSave = () => {
		// Here you would send data to backend API
		setEditing(false);
		alert("Profile updated successfully!");
	};

	return (
		<div style={styles.container}>
			<h2 style={styles.title}>👤 My Profile</h2>

			<div style={styles.card}>
				<label style={styles.label}>Name:</label>
				<input
					type="text"
					value={name}
					disabled={!editing}
					onChange={(e) => setName(e.target.value)}
					style={styles.input}
				/>

				<label style={styles.label}>Email:</label>
				<input
					type="email"
					value={email}
					disabled={!editing}
					onChange={(e) => setEmail(e.target.value)}
					style={styles.input}
				/>

				<label style={styles.label}>Contact:</label>
				<input
					type="text"
					value={contact}
					disabled={!editing}
					onChange={(e) => setContact(e.target.value)}
					style={styles.input}
				/>

				<div style={styles.buttons}>
					{editing ? (
						<button onClick={handleSave} style={styles.saveButton}>Save</button>
					) : (
						<button onClick={toggleEdit} style={styles.editButton}>Edit Profile</button>
					)}
				</div>
			</div>
		</div>
	);
};

const styles: { [key: string]: React.CSSProperties } = {
	container: {
		padding: "20px",
		display: "flex",
		flexDirection: "column",
        height: "100vh",
		alignItems: "center",
        background: "linear-gradient(135deg, #55b0ffff, #31e4a0ff)",
	},
	title: {
		fontSize: "32px",
		marginBottom: "50px",
	},
	card: {
		width: "500px",
        height: "400px",
		padding: "20px",
		border: "1px solid #ddd",
		borderRadius: "10px",
		backgroundColor: "#c3fdfdff",
		boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
		display: "flex",
		flexDirection: "column",
		gap: "10px",
	},
	label: {
		fontWeight: "bold",
		marginTop: "10px",
	},
	input: {
		padding: "8px 10px",
		borderRadius: "5px",
		border: "1px solid #ccc",
	},
	buttons: {
		marginTop: "15px",
		display: "flex",
		justifyContent: "center",
	},
	editButton: {
		padding: "8px 15px",
		backgroundColor: "#4CAF50",
		color: "white",
		border: "none",
		borderRadius: "5px",
		cursor: "pointer",
	},
	saveButton: {
		padding: "8px 15px",
		backgroundColor: "#2196F3",
		color: "white",
		border: "none",
		borderRadius: "5px",
		cursor: "pointer",
	},
};

export default Profile;
