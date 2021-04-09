import { useState, useEffect } from "react";
import Header from "./components/Header";
import DiveSites from "./components/DiveSites";
import Gallery from "./components/Gallery";
import LoggedDives from "./components/LoggedDives";
import Footer from "./components/Footer";
import "./styles.css";

export default function App() {
	return (
		<div className="container">
			<Header />
			<DiveSites />
			<Gallery />
			<LoggedDives />
			<Footer />
		</div>
	);
}
