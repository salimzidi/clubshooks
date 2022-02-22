import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function Navigation({ setSearchTerm, setRate, rate }) {
	return (
		<Navbar
			bg="dark"
			variant="dark"
			style={{ display: "flex", justifyContent: "space-between" }}
		>
			<Navbar.Brand href="#home">Movie App</Navbar.Brand>
			<Nav className="mr-auto" style={{ justifyContent: "space-around" }}> 
				<Link to="/" className="nav">
					Home
				</Link>
				<Link to="/movieList" className="nav">
					Movies
				</Link>

				<Link to="/tvshows" className="nav">
					Tv-Shows
				</Link>
			</Nav>
		</Navbar>
	);
}

export default Navigation;
