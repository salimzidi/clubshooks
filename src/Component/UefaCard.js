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
					src={UefaData.foto}
				/>
				<Card.Body>
					<Card.Title> {UefaData.tittle}</Card.Title>
					<Card.Text>{UefaData.URL}</Card.Text>
					<Card.Text>{UefaData.rate}</Card.Text>
					<Card.Text>{UefaData.description}</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default UefaCard;
