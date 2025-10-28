import React, { useState } from "react";

interface Note {
	id: number;
	title: string;
	content: string;
	file?: File | null;  // Allow null // Optional file associated with note
	fileURL?: string; // For preview/download
}

const Notes: React.FC = () => {
	const [notes, setNotes] = useState<Note[]>([]);
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [file, setFile] = useState<File | null>(null);
	const [editId, setEditId] = useState<number | null>(null);

	const handleSave = () => {
		if (!title || !content) return;

		const fileURL = file ? URL.createObjectURL(file) : undefined;

		if (editId !== null) {
			// Update existing note
			setNotes(notes.map(note =>
				note.id === editId ? { ...note, title, content, file, fileURL } : note
			));
			setEditId(null);
		} else {
			// Add new note
			const newNote: Note = { id: Date.now(), title, content, file, fileURL };
			setNotes([newNote, ...notes]);
		}

		setTitle("");
		setContent("");
		setFile(null);
	};

	const handleEdit = (note: Note) => {
		setTitle(note.title);
		setContent(note.content);
		setFile(note.file || null);
		setEditId(note.id);
	};

	const handleDelete = (id: number) => {
		setNotes(notes.filter(note => note.id !== id));
	};

	return (
		<div style={styles.container}>
			<h2 style={styles.title}>📝 My Notes</h2>

			<div style={styles.form}>
				<input
					type="text"
					placeholder="Title"
					value={title}
					maxLength={50}
					onChange={(e) => setTitle(e.target.value)}
					style={styles.input}
				/>
				<textarea
					placeholder="Content"
					value={content}
					maxLength={1000}
					onChange={(e) => setContent(e.target.value)}
					style={styles.textarea}
				/>
				<input
				  type="file"
				  onChange={(e) => {
				    const file = e.target.files?.[0];
				    if (file) {
				      if (file.size > 5 * 1024 * 1024) {
				        alert("File size exceeds 5MB limit.");
				        e.target.value = ""; // Clear the input
				        setFile(null);
				      } else {
				        setFile(file);
				      }
				    }
				  }}
				  style={styles.input}
				/>

				{file && (
				  <div style={{ marginTop: "10px" }}>
				    <p>📎 {file.name}</p>

				    {file.type.startsWith("image/") ? (
				      <img
				        src={URL.createObjectURL(file)}
				        alt="Preview"
				        style={{ maxWidth: "700px", borderRadius: "6px", marginTop: "8px" }}
				      />
				    ) : file.type === "application/pdf" ? (
				      <iframe
				        src={URL.createObjectURL(file)}
				        title="PDF Preview"
				        style={{ width: "700px", height: "550px", border: "1px solid #ccc", marginTop: "8px" }}
				      />
				    ) : (
				      <p style={{ fontStyle: "italic", color: "#777" }}>
				        Preview not available for this file type.
				      </p>
				    )}
				  </div>
				)}



				<button onClick={handleSave} style={styles.addButton}>
					{editId ? "✏️ Update Note" : "➕ Add Note"}
				</button>
			</div>

			<div style={styles.list}>
				{notes.length === 0 && <p>No notes yet!</p>}
				{notes.map(note => (
					<div key={note.id} style={styles.card}>
						<h3>{note.title}</h3>
						<p>{note.content}</p>
						{note.fileURL && (
						  <div style={{ marginTop: "10px" }}>
						    <p>📎 {note.file?.name}</p>

						    {note.file?.type.startsWith("image/") ? (
						      <img
						        src={note.fileURL}
						        alt="Preview"
						        style={{ maxWidth: "100%", borderRadius: "6px", marginTop: "8px" }}
						      />
						    ) : note.file?.type === "application/pdf" ? (
						      <iframe
						        src={note.fileURL}
						        title="PDF Preview"
						        style={{ width: "100%", height: "300px", border: "1px solid #ccc", marginTop: "8px" }}
						      />
						    ) : (
						      <p style={{ fontStyle: "italic", color: "#777" }}>
						        Preview not available for this file type.
						      </p>
						    )}
						  </div>
						)}


						<div style={styles.actions}>
							<button
								onClick={() => handleEdit(note)}
								style={styles.editButton}
							>
								✏️ Edit
							</button>
							<button
								onClick={() => handleDelete(note.id)}
								style={styles.deleteButton}
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
		padding: "20px",
		textAlign: "center",
		background: "linear-gradient(135deg, #add9ffff, #33cf93ff)",
		minHeight: "100vh",
	},
	title: {
		fontSize: "36px",
		marginBottom: "20px",
	},
	form: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: "10px",
		marginBottom: "20px",
	},
	input: {
		width: "700px",
		padding: "10px",
		borderRadius: "5px",
		border: "1px solid #ccc",
		backgroundColor: "#caffdaff",
	},
	textarea: {
		width: "700px",
		height: "180px",
		padding: "10px",
		borderRadius: "5px",
		border: "1px solid #ccc",
		resize: "none",
		backgroundColor: "#caffdaff",
	},
	addButton: {
		padding: "10px 20px",
		borderRadius: "5px",
		border: "none",
		backgroundColor: "#4CAF50",
		color: "white",
		cursor: "pointer",
	},
	list: {
		display: "flex",
		flexDirection: "column",
		gap: "15px",
		alignItems: "center",
	},
	card: {
		width: "700px",
		padding: "15px",
		border: "1px solid #ddd",
		borderRadius: "8px",
		background: "#f9f9f9",
		textAlign: "left",
		boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
		position: "relative",
	},
	actions: {
		marginTop: "10px",
		display: "flex",
		gap: "10px",
	},
	editButton: {
		backgroundColor: "#ffc107",
		color: "black",
		border: "none",
		padding: "5px 10px",
		borderRadius: "5px",
		cursor: "pointer",
	},
	deleteButton: {
		backgroundColor: "#e74c3c",
		color: "white",
		border: "none",
		padding: "5px 10px",
		borderRadius: "5px",
		cursor: "pointer",
	},
};

export default Notes;
