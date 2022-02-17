import React from "react";
import { Card } from "react-bootstrap";

const UefaCard = ({ UefaData }) => {
	return (
		<div>
			<Card style={{ width: "18rem" }}>
				<Card.Img
					variant="top"
					width="120px"
					height="220px"
					src={UefaData.posterUrl}
				/>
				<Card.Body>
					<Card.Title> {UefaData.title}</Card.Title>
					<Card.Text>{UefaData.posterUrl}</Card.Text>
					<Card.Text>{UefaData.rating}</Card.Text>
					<Card.Text>{UefaData.description}</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default UefaCard;
