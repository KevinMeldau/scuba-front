import "../styles.css";
import { FaSwimmer } from "react-icons/fa";
import { FaFish } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaHandsHelping } from "react-icons/fa";
import padiLogo from "../images/padi_logo.png";
import ssiLogo from "../images/ssi_logo.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="columns column">
          <FaSwimmer
            style={{
              fontSize: "5em",
              color: "var(--clr-accent-dark)",
            }}
          />
          <p className="h2 title">Ask Us Now!</p>
          <hr />
          <p>
            Mystery snail lionfish papershell houndshark. Manta ray with
            lionfish ect.
          </p>
          <div className="logos-container">
            <img className="logos" src={padiLogo} alt="PADI logo" />
            <img className="logos" src={ssiLogo} alt="PADI logo" />
          </div>
        </div>
        <div className="columns column">
          <FaFish
            style={{
              fontSize: "5em",
              color: "var(--clr-accent-dark)",
            }}
          />
          <p className="h2 title">Information</p>
          <hr />
          <p>
            Mystery snail lionfish papershell houndshark. Manta ray with
            lionfish ect.
          </p>
        </div>
        <div className="columns column">
          <FaHandsHelping
            style={{
              fontSize: "5em",
              color: "var(--clr-accent-dark)",
            }}
          />
          <p className="h2 title">Contact Us</p>
          <hr />
          <div className="phone">
            <FaPhone style={{ margin: "0 1em" }} />
            <p>555.555.6678</p>
          </div>
          <div className="email">
            <FiMail style={{ margin: "0 1em" }} />
            <p>email@company.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
