import React from 'react';
import {Container } from 'react-bootstrap';
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
				<form onSubmit={handleSubmit} className="form">
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
						type="text"
						required
					/>
					<button type="submit">Submit</button>
				</form>
			</Container>
		</>
	);
};

export default NewItemView;
