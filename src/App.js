import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
	const [state, setState] = useState({
		logs: [
			{
				country: "",
				site: "",
				condition: "",
			},
		],
		newLog: {
			country: "",
			site: "",
			condition: "",
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
				country: "",
				site: "",
				condition: "",
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
					<div>{s.country}</div>
					<div>{s.site}</div>
					<div>{s.condition}</div>
				</article>
			))}
			<hr />
			<form onSubmit={addLog}>
				<label>
					<span>Country</span>
					<input
						name="country"
						value={state.newLog.log}
						onChange={handleChange}
					/>
				</label>
				<label>
					<span>Site</span>
					<input
						name="site"
						value={state.newLog.log}
						onChange={handleChange}
					/>
				</label>
				<label>
					<span>Description</span>
					<input
						name="condition"
						value={state.newLog.log}
						onChange={handleChange}
					/>
				</label>
				<button>ADD LOG</button>
			</form>
		</section>
	);
}
