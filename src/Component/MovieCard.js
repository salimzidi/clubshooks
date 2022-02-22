import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UefaCard = ({ UefaData }) => {
	const navigate = useNavigate();
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

					<Card.Text>{UefaData.rating}</Card.Text>

					<Button
						onClick={() =>
							navigate(`/list/description/${UefaData.id}`)
						}
					>
						About
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default UefaCard;
