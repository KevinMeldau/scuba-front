import { useState, useEffect } from "react";
import "../styles.css";

export default function DiveSites() {
  const [dives, setDives] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const BASE_URL =
      "https://cors-anywhere.herokuapp.com/http://api.divesites.com";
    fetch(BASE_URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("DATA: ", data);
        setDives(data.sites);
        setLoading(false);
      })
      .catch((error) => {
        console.log("ERROR: ", error);
      });
  };

  if (loading) return <div />;

  return (
    <section className="dive-sites">
      <h2 className="h1">
        <span>Dive</span> Sites near you
      </h2>
      <hr className="hr" />
      <div className="dive-sites-container">
        <div className="site-card">
          {dives.map((s) => (
            <div key={s.id}>
              <div className="dive-site-title">{s.name}</div>
              <p className="dive-site-add">
                {s.distance} Miles from current location
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
