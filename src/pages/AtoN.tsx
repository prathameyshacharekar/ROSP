	import React, { useState } from "react";
	import jsPDF from "jspdf";

	const AtoN: React.FC = () => {
		const [audioFile, setAudioFile] = useState<File | null>(null);
		const [transcribedText, setTranscribedText] = useState("");
		const [isLoading, setIsLoading] = useState(false);

		// Handle audio file selection
		const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			const file = e.target.files?.[0];
			if (file) {
				if (file.size > 5 * 1024 * 1024) { // 5MB limit
					alert("File size must be 5MB or less");
					return;
				}
				setAudioFile(file);
			}
		};

		// Send file to backend for transcription
		const handleTranscribe = async () => {
			if (!audioFile) return;
			setIsLoading(true);

			const formData = new FormData();
			formData.append("audio", audioFile);

			try {
				const res = await fetch("/api/transcribe", {
					method: "POST",
					body: formData,
				});

				if (!res.ok) {
					throw new Error("Transcription failed");
				}

				const data = await res.json();
				setTranscribedText(data.text);
			} catch (err) {
				console.error(err);
				alert("Failed to transcribe audio");
			} finally {
				setIsLoading(false);
			}
		};

		// Generate PDF from the transcribed text
		const handleDownloadPDF = () => {
			if (!transcribedText) return;
			const doc = new jsPDF();
			doc.setFontSize(14);
			doc.text("🎧 Audio to Notes Transcription", 10, 15);
			doc.setFontSize(12);
			const splitText = doc.splitTextToSize(transcribedText, 180);
			doc.text(splitText, 10, 30);
			doc.save("Audio_Notes.pdf");
		};

		return (
			<div style={styles.container}>
				<h2 style={styles.heading}>🎤 Audio → Notes Converter</h2>

				<input
					type="file"
					accept="audio/*"
					onChange={handleFileChange}
					style={styles.fileInput}
				/>

				<button
					onClick={handleTranscribe}
					disabled={!audioFile || isLoading}
					style={styles.transcribeBtn}
				>
					{isLoading ? "⏳ Transcribing..." : "📝 Convert to Notes"}
				</button>

				{transcribedText && (
					<div style={styles.outputContainer}>
						<h3>📝 Transcribed Text:</h3>
						<div style={styles.textBox}>{transcribedText}</div>
						<button onClick={handleDownloadPDF} style={styles.downloadBtn}>
							📄 Download PDF
						</button>
					</div>
				)}
			</div>
		);
	};

	const styles: { [key: string]: React.CSSProperties } = {
		container: {
			padding: "20px",
			background: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
			borderRadius: "12px",
			maxWidth: "600px",
			margin: "30px auto",
			boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
			textAlign: "center",
		},
		heading: {
			fontSize: "24px",
			marginBottom: "15px",
		},
		fileInput: {
			margin: "10px 0",
		},
		transcribeBtn: {
			backgroundColor: "#4CAF50",
			color: "white",
			border: "none",
			padding: "10px 15px",
			borderRadius: "5px",
			cursor: "pointer",
			marginTop: "5px",
		},
		outputContainer: {
			marginTop: "20px",
			textAlign: "left",
		},
		textBox: {
			backgroundColor: "#fff",
			padding: "10px",
			borderRadius: "8px",
			boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
			marginBottom: "10px",
			maxHeight: "250px",
			overflowY: "auto",
			whiteSpace: "pre-wrap",
		},
		downloadBtn: {
			backgroundColor: "#2196F3",
			color: "white",
			border: "none",
			padding: "10px 15px",
			borderRadius: "5px",
			cursor: "pointer",
		},
	};

	export default AtoN;
