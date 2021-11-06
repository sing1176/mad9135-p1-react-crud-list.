import React from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const NewItemView = ({ setData, data }) => {
	const [heroName, setHeroName] = useState('');
	const [creator, setCreator] = useState('');
	const [link, setLink] = useState('');
	const [modalShow, setModalShow] = useState(false);

	function handleSubmit(event) {
		event.preventDefault();
		setModalShow(true);
		let newObj = {
			id: Math.random().toString(36).substr(2, 9),
			name: heroName,
			creator: creator,
			url: link,
		};
		setData([...data, newObj]);
	}

function MyVerticallyCenteredModal(props) {
	return (
		<Modal
			{...props}
			size="md"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					New SuperHero has been Added Would you like to add more?
				</Modal.Title>
			</Modal.Header>
			<Modal.Footer>
				<div className="modalBtn">
					<Button onClick={props.onHide}>Yes</Button>
					<Link to="/">
					<Button className="text-center" variant="danger">
						No
					</Button>
					</Link>
				</div>
			</Modal.Footer>
		</Modal>
	);
}

	return (
		<>
			<Container>
				<MyVerticallyCenteredModal
					show={modalShow}
					onHide={() => setModalShow(false)}
				/>
				<div className="form">
					<form onSubmit={handleSubmit}>
						<input
							value={heroName}
							onChange={(e) => setHeroName(e.target.value)}
							placeholder="Superhero Name"
							type="text"
							required
						/>
						<input
							value={creator}
							onChange={(e) => setCreator(e.target.value)}
							placeholder="Creator"
							type="text"
							required
						/>
						<input
							value={link}
							onChange={(e) => setLink(e.target.value)}
							placeholder="Add links"
							type="url"
							required
						/>

						<div className="formBtn">
							<Button variant="dark" type="submit"> Save </Button>

							<Link to="/">
								<Button variant="secondary">Cancel</Button>
							</Link>
						</div>
					</form>
				</div>
			</Container>
		</>
	);
};

export default NewItemView;
