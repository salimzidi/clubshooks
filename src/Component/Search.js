import React, { useState } from "react";

import UefaList from "./UefaList";

const Search = () => {
	const [searchField, setSearchField] = useState("");
	const handleChange = (e) => setSearchField(e.target.value);
	return (
		<div>
			<input
				type="search"
				placeholder="Search Film "
				// onChange={(e)=>setSearchField(e.target.value)}
				onChange={handleChange}
			/>
			<UefaList searchh={searchField} />
		</div>
	);
};

export default Search;
