import "../styles.css";
import companyLogo from "../images/logo.png";

export default function Header() {
	return (
		<div className="header">
			<div className="nav-container">
				<img src={companyLogo} alt="Dive logo" />
				<div className="nav"></div>
			</div>
		</div>
	);
}
