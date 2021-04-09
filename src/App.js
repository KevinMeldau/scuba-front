import { useState, useEffect } from "react";
import Header from "./components/Header";
import DiveSites from "./components/DiveSites";
import ImagesGallery from "./components/ImagesGallery";
import About from "./components/About";
import LoggedDives from "./components/LoggedDives";
import Footer from "./components/Footer";
import "./styles.css";

export default function App() {
	return (
		<div className="container">
			<Header />
			<DiveSites />
			<About />
			<ImagesGallery />
			<LoggedDives />
			<Footer />
		</div>
	);
}
