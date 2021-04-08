import { useState, useEffect } from "react";
import LoggedDives from "./components/LoggedDives";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles.css";

export default function App() {
	return (
		<div className="container">
			<Header />
			<LoggedDives />
			<Footer />
		</div>
	);
}
