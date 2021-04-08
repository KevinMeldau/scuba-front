import "../styles.css";
import companyLogo from "../images/logo.png";

export default function Header() {
	return (
		<div className="header">
			<div className="nav-container">
				<img src={companyLogo} alt="Dive logo" />
				<div className="nav">
					<div className="nav-items">
						<ul>
							<a href="#">
								<li>About</li>
							</a>
							<a href="#">
								<li>Explore</li>
							</a>
							<a href="#">
								<li>Dive Log</li>
							</a>
							<a href="#">
								<li>Contact</li>
							</a>
						</ul>
					</div>
					<div className="nav-login">
						<ul>
							<a href="#">
								<li>Login</li>
							</a>
							<a href="#">
								<li>Register</li>
							</a>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
