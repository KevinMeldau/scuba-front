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
      const logs = await fetch(BASE_URL).then((res) => res.json());
      setState((prevState) => ({
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
    }).then((res) => res.json());

    setState((prevState) => ({
      logs: [...prevState.logs, log],
      newLog: {
        country: "",
        site: "",
        condition: "",
      },
    }));
  }

  function handleChange(e) {
    setState((prevState) => ({
      ...prevState,
      newLog: {
        ...prevState.newLog,
        [e.target.name]: e.target.value,
      },
    }));
  }

  return (
    <section className="logged-dives">
      <h2 className="h1 uppercase">
        My <span>Logged</span> Dives
      </h2>
      <hr className="hr hr-dive-logged-dives" />
      <p>
        Rabbitfish heelsplitter at flounder search clownfish. Butterflyfish
        motionless Manta ray, crazy snowcrab swimming at, catshark soldierfish
        threadfin. Colorful blue tang houndshark, swim at banded grunt in, net a
        king crab. Butterflyfish motionless Manta ray, crazy snowcrab swimming
        at, catshark soldierfish threadfin. Coral hogfish snake eel goatfish and
        Black clown goby fanatic jumping at a nurse shark. Mandarinfish in a
        fire fish, an algae unknown. Myster.
      </p>
      <div className="logged-dives-container">
        <article>
          <div className="country table-head">Country</div>
          <div className="site table-head">Dive Site</div>
          <div className="condition table-head">Conditions</div>
          {/* <div className="date table-head">Date</div> */}
        </article>
        {state.logs.map((s) => (
          <article key={s.log}>
            <div className="country">{s.country}</div>
            <div className="site">{s.site}</div>
            <div className="condition">{s.condition}</div>
          </article>
        ))}
      </div>
      <div className="form-container">
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

          <button className="btn btn-add-log">Add log</button>
        </form>
      </div>
    </section>
  );
}
