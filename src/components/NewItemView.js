import React from 'react';
import {Container, Button } from 'react-bootstrap';
import{ useState } from 'react';
const NewItemView = ({ setData, data }) => {

	
	const [heroName, setHeroName] = useState('');
	const [creator, setCreator] = useState('');
	const [link, setLink] = useState('');

	function handleSubmit(event) {
    event.preventDefault();
	let newObj = {
		id: Math.random().toString(36).substr(2, 9),
		name: heroName,
		creator: creator,
		url: link,
	};
	setData([...data, newObj]);
  }
	return (
		<>
			<Container>
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
						<Button type="submit"> Submit </Button>
					</form>
				</div>
			</Container>
		</>
	);
};

export default NewItemView;
