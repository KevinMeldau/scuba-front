import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
	const [state, setState] = useState({
		logs: [{ log: "JavaScript", level: "4" }],
		newLog: {
			log: "",
			level: "3",
		},
	});

	async function getAppData() {
		try {
			const BASE_URL = "http://localhost:3001/api/logs";
			const logs = await fetch(BASE_URL).then(res => res.json());
			setState(prevState => ({
				...prevState,
				logs,
			}));
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getAppData();
	}, []);

	async function addLog(e) {
		e.preventDefault();

		const BASE_URL = "http://localhost:3001/api/logs";

		const log = await fetch(BASE_URL, {
			method: "POST",
			headers: {
				"Content-type": "Application/json",
			},
			body: JSON.stringify(state.newLog),
		}).then(res => res.json());

		setState(prevState => ({
			logs: [...prevState.logs, log],
			newLog: {
				log: "",
				level: "3",
			},
		}));
	}

	function handleChange(e) {
		setState(prevState => ({
			...prevState,
			newLog: {
				...prevState.newLog,
				[e.target.name]: e.target.value,
			},
		}));
	}

	return (
		<section>
			<h2>Dive Logs</h2>
			<hr />
			{state.logs.map(s => (
				<article key={s.log}>
					<div>{s.log}</div> <div>{s.level}</div>
				</article>
			))}
			<hr />
			<form onSubmit={addLog}>
				<label>
					<span>SKILL</span>
					<input
						name="log"
						value={state.newLog.log}
						onChange={handleChange}
					/>
				</label>
				<label>
					<span>LEVEL</span>
					<select
						name="level"
						value={state.newLog.level}
						onChange={handleChange}
					>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
				</label>
				<button>ADD SKILL</button>
			</form>
		</section>
	);
}
