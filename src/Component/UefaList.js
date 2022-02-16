import React, { useState } from "react";
import UefaData from "./UefaData";
import UefaCard from "./UefaCard";
import "./UefaList.css";

import Add from './Add';
const UefaList = ({ searchh }) => {
	const [uefa, setUefa] = useState(UefaData);
	const addNew = (NewClub) => setUefa ([...uefa , NewClub]);
	return (
		<div className="SSS">
			<Add addNew={addNew} />
			{uefa
				.filter(
					(uefas) =>
						uefas.tittle
							.toLowerCase()
							.includes(searchh.toLowerCase()) ||
						uefas.rate == searchh.toLowerCase()
				)
				.map((el) => (
					<UefaCard UefaData={el} />
				))}  
		</div>
	);
};

export default UefaList;
