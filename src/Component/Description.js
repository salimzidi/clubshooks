import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import MovieData from "./MovieData";
import { Button } from "react-bootstrap";

const Description = () => {
	const navigate = useNavigate();
	const params = useParams();
	const aboutf = MovieData.find((el) => el.id == params.id);
	return (
		<div>
			{" "}
			<h5> {aboutf.description} </h5>
			<iframe src={aboutf.trailer} alt="" title="abouuut" />
			<Button onClick={() => navigate("/")}>Go to home</Button>
			<Button onClick={() => navigate(-1)}>Go Back </Button>
		</div>
	);
};

export default Description;
