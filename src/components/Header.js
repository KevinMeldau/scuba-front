import "../styles.css";
import companyLogo from "../images/logo.png";

export default function Header() {
	return (
		<div className="header">
			<div className="nav-container">
				<img src={companyLogo} alt="Dive logo" />
				<div className="nav">
					<div className="nav-items">
						<a href="#">About</a>
						<a href="#">Explore</a>
						<a href="#">Dive Logs</a>
						<a href="#">Contact</a>
					</div>
					<div className="nav-login">
						<a href="#">Login</a>
						<div class="vl"></div>
						<a href="#">Register</a>
					</div>
				</div>
			</div>
		</div>
	);
}
