import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';

const ListView = ({data}) => {
	return (
		<>
			<Container>
				{data.map((item) => (
					<div className="infoCard">
						<div className="info">
							<h2>{item.name}</h2>
							<p>{item.creator}</p>
							<p>{item.url}</p>
						</div>

						<div className="buttons">
							<Button variant="warning">Edit </Button>
							<Button variant="danger">Delete</Button>
						</div>
					</div>
				))}
			</Container>
		</>
	);
};

export default ListView;
