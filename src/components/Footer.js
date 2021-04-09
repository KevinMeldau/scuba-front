import { FaSwimmer } from "react-icons/fa";
import { FaFish } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaHandsHelping } from "react-icons/fa";
import "../styles.css";

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
						Footer text goes hereFooter text goes hereFooter text
						goes here
					</p>
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
						Footer text goes hereFooter text goes hereFooter text
						goes here
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
						<p>email@jhon.email.com</p>
					</div>
				</div>
			</div>
		</div>
	);
}
