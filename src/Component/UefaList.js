import React, { useState } from "react";
import UefaData from "./MovieData";
import UefaCard from "./MovieCard";
import "./UefaList.css";

import Add from "./Add";
const UefaList = ({ searchh }) => {
	const [uefa, setUefa] = useState(UefaData);
	const addNew = (NewClub) => setUefa([...uefa, NewClub]);
	return (
		<div className="SSS">
			<Add addNew={addNew} />
			{uefa
				.filter(
					(uefas) =>
						uefas.title
							.toLowerCase()
							.includes(searchh.toLowerCase()) ||
						uefas.rating == searchh.toLowerCase()
				)
				.map((el) => (
					<UefaCard UefaData={el} />
				))}
		</div>
	);
};

export default UefaList;
