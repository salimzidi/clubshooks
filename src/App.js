import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Search from "./Component/Search";
import Navigation from "./Component/Navigation";
import Description from "./Component/Description";

function App() {
	return (
		<div className="App">
			<Navigation />
			<h1> Movie App </h1>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/list" element={<Search />} />
				<Route path="/list/description/:id" element={<Description />} />
			</Routes>
		</div>
	);
}

export default App;
