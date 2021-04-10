import "../styles.css";
import companyLogo from "../images/logo.png";

export default function Header() {
  return (
    <div className="header">
      <div className="nav-container">
        <div className="nav-top">
          <p className="">Seabrand Marine Cruises has been </p>
          <img src={companyLogo} alt="Dive logo" />
          <p className="">a proud member of the FDI since 1991</p>
        </div>
        <div className="nav">
          <div className="nav-items">
            <a href="#">About</a>
            <a href="#">Explore</a>
            <a href="#">Dive Logs</a>
            <a href="#">Contact</a>
            <input
              type="text"
              value="What are you looking for?"
              className="input-primary search"
            />
          </div>
          <div className="nav-login">
            <a href="#">Login</a>
            <div class="vl"></div>
            <a href="#">Register</a>
          </div>
        </div>
      </div>
      <div className="signup-container">
        <p className="h2">
          Signup for our newsletter and receive <span>20% OFF</span> your next
          Diving trip
        </p>
        <div className="signup-form">
          <input
            type="text"
            className="input-primary"
            placeholder="email@email.com"
          />
          <button className="btn btn-signup">Submit</button>
        </div>
      </div>
    </div>
  );
}
