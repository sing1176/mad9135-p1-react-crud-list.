import React from 'react';
import { Button, Container} from 'react-bootstrap';

const ListView = () => {
	return (
		<>
			<Container>
				<div className="infoCard">
					<div className="info">
						<h2>Title</h2>

						<p>Creator</p>
						<p>learn More</p>
					</div>

					<div className="buttons">
						<Button variant="warning">Edit </Button>
						<Button variant="danger">Delete</Button>
					</div>
				</div>
			</Container>
		</>
	);
};

export default ListView;
