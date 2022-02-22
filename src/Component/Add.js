import React from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Add = ({ addNew }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const handleAdd = () => {
		handleClose();
		addNew({ title, description, rating, posterUrl , trailer});
	};
	const [title, setTittle] = useState("");
	const [description, setDescription] = useState("");
	const [rating, setRate] = useState(0);
	const [posterUrl, setFoto] = useState("");
	const [trailer, setTrailer] = useState("");
	return (
		<div>
			<>
				<Button variant="primary" onClick={handleShow}>
					Add
				</Button>

				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Add Club </Modal.Title>
					</Modal.Header>
					<Modal.Body>
						{" "}
						<label> title:</label>
						<input
							type="text"
							onChange={(e) => setTittle(e.target.value)}
						/>
						<label> description :</label>
						<input
							type="text"
							onChange={(e) => setDescription(e.target.value)}
						/>
						<label> images :</label>
						<input
							type="text"
							onChange={(e) => setFoto(e.target.value)}
						/>
						<label> rate : </label>
						<input
							type="text"
							onChange={(e) => setRate(e.target.value)}
						/>
							<label> trailer : </label>
						<input
							type="text"
							onChange={(e) => setTrailer(e.target.value)}
						/>
					
					
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
						<Button variant="primary" onClick={handleAdd}>
							Add
						</Button>
					</Modal.Footer>
				</Modal>
			</>
		</div>
	);
};

export default Add;
