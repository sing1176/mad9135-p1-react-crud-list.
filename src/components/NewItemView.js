import React from 'react';
import { Button, Container, } from 'react-bootstrap';
const NewItemView = () => {
	return (
		<>
			<Container>
				<div className="form">
					<label>Superhero Name</label>
					<input type="text" />
					<br />
					<label>Creator</label>
					<input type="text" />
					<br />
					<label>Add link</label>
					<input type="text" />
				</div>
				<div className="formControl">
					<Button>Save </Button>
					<Button variant="danger">cancel</Button>
				</div>
			</Container>
		</>
	);
};

export default NewItemView;
