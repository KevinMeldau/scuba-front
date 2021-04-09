import { useState, useEffect } from "react";
import Header from "./components/Header";
import DiveSites from "./components/DiveSites";
import ImagesGallery1 from "./components/ImagesGallery1";
import ImagesGallery2 from "./components/ImagesGallery2";
import About from "./components/About";
import LoggedDives from "./components/LoggedDives";
import Footer from "./components/Footer";
import "./styles.css";

export default function App() {
	return (
		<div className="container">
			<Header />
			<DiveSites />
			<ImagesGallery1 />
			<About />
			<ImagesGallery2 />
			<div className="turtle-image">
				<LoggedDives />
			</div>
			<Footer />
		</div>
	);
}
