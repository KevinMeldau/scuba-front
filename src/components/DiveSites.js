import "../styles.css";

export default function DiveSites() {
	return (
		<section className="dive-sites">
			<h2 className="h1">Dive Sites near you</h2>
			<hr className="hr hr-dive-sites" />
			<div className="dive-sites-container">
				<div className="site-card">
					<strong className="dive-site-title">ABC Dive</strong>
					<p className="dive-site-add">
						76 Smith Street, Atlanta 30032
					</p>
					<p className="dive-site-tel">555.054.7787</p>
				</div>
				<div className="site-card">
					<strong className="dive-site-title">ABC Dive</strong>
					<p className="dive-site-add">
						76 Smith Street, Atlanta 30032
					</p>
					<p className="dive-site-tel">555.054.7787</p>
				</div>
				<div className="site-card">
					<strong className="dive-site-title">ABC Dive</strong>
					<p className="dive-site-add">
						76 Smith Street, Atlanta 30032
					</p>
					<p className="dive-site-tel">555.054.7787</p>
				</div>
				<div className="site-card">
					<strong className="dive-site-title">ABC Dive</strong>
					<p className="dive-site-add">
						76 Smith Street, Atlanta 30032
					</p>
					<p className="dive-site-tel">555.054.7787</p>
				</div>
			</div>
		</section>
	);
}