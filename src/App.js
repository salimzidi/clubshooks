import { Navbar } from "react-bootstrap";
import "./App.css";
import Search from "./Component/Search";

function App() {
	return (
		<div className="App">
			<h1> Movie App </h1>

			<Navbar />
			<Search />
		</div>
	);
}

export default App;
