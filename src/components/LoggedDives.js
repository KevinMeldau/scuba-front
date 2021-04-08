import { useState, useEffect } from "react";
import "../styles.css";

export default function LoggedDives() {
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
			<h2>My Logged Dives</h2>
			{state.logs.map(s => (
				<article key={s.log}>
					<div>{s.country}</div>
					<div>{s.site}</div>
					<div>{s.condition}</div>
				</article>
			))}
			<form onSubmit={addLog}>
				<label>
					<span>Country</span>
					<select
						name="country"
						value={state.newLog.log}
						onChange={handleChange}
					>
						<option value="Aruba">Aruba</option>
						<option value="Bahamas">Bahamas</option>
						<option value="Belize">Belize</option>
						<option value="Benin">Benin</option>
						<option value="Bermuda">Bermuda</option>
						<option value="Cambodia">Cambodia</option>
						<option value="Canary Islands">Canary Islands</option>
						<option value="Cayman Islands">Cayman Islands</option>
						<option value="Cocos Island">Cocos Island</option>
						<option value="Guam">Guam</option>
						<option value="Hawaii">Hawaii</option>
						<option value="Iceland">Iceland</option>
						<option value="Indonesia">Indonesia</option>
						<option value="Italy">Italy</option>
						<option value="Jamaica">Jamaica</option>
						<option value="Japan">Japan</option>
						<option value="Jordan">Jordan</option>
						<option value="Kazakhstan">Kazakhstan</option>
						<option value="Maldives">Maldives</option>
						<option value="Mauritius">Mauritius</option>
						<option value="Mayotte">Mayotte</option>
						<option value="Mexico">Mexico</option>
						<option value="Morocco">Morocco</option>
						<option value="Mozambique">Mozambique</option>
						<option value="Myanmar">Myanmar</option>
						<option value="Nambia">Nambia</option>
						<option value="Nauru">Nauru</option>
						<option value="Nepal">Nepal</option>
						<option value="Paraguay">Paraguay</option>
						<option value="Seychelles">Seychelles</option>
						<option value="Sierra Leone">Sierra Leone</option>
						<option value="Singapore">Singapore</option>
						<option value="Slovakia">Slovakia</option>
						<option value="Thailand">Thailand</option>
						<option value="Togo">Togo</option>
						<option value="Tuvalu">Tuvalu</option>
						<option value="Uganda">Uganda</option>
						<option value="United Kingdom">United Kingdom</option>
						<option value="Yemen">Yemen</option>
						<option value="Zaire">Zaire</option>
						<option value="Zambia">Zambia</option>
						<option value="Zimbabwe">Zimbabwe</option>
					</select>
				</label>
				<label>
					<span>Dive Site</span>
					<input
						name="site"
						value={state.newLog.log}
						onChange={handleChange}
					/>
				</label>
				<label>
					<span>Conditions</span>
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
