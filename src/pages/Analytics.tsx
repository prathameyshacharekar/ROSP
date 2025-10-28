import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Analytics: React.FC = () => {
	// Dummy study data
	const subjects = ["Mathematics", "Computer Networks", "Operating Systems", "Data Structures", "Database"];
	const hours = [12, 8, 10, 15, 6];

	const data = {
		labels: subjects,
		datasets: [
			{
				label: "Hours Studied",
				data: hours,
				backgroundColor: "#3f8d3eff",
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: true,
				text: "Study Hours per Subject",
			},
		},
	};

	return (
		<div style={styles.container}>
			<h2 style={styles.title}>📊 Study Analytics</h2>

			<div style={styles.chartWrapper}>
				<Bar data={data} options={options} />
			</div>

			<div style={styles.summary}>
				<p>Total Subjects: {subjects.length}</p>
				<p>Total Hours: {hours.reduce((a, b) => a + b, 0)}</p>
				<p>Most Studied: {subjects[hours.indexOf(Math.max(...hours))]}</p>
			</div>
		</div>
	);
};

const styles: { [key: string]: React.CSSProperties } = {
	container: {
		padding: "20px",
		textAlign: "center",
		background: "linear-gradient(135deg, #55b0ffff, #31e4a0ff)",
		height: "100vh",
	},
	title: {
		fontSize: "36px",
		marginBottom: "30px",
	},
	chartWrapper: {
		width: "100%",
		maxWidth: "700px",
		margin: "0 auto 30px auto",
	},
	summary: {
		display: "flex",
		justifyContent: "space-around",
		maxWidth: "700px",
		margin: "0 auto",
		padding: "15px",
		border: "1px solid #ddd",
		borderRadius: "8px",
		backgroundColor: "#cacfffff",
		boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
	},
};

export default Analytics;
