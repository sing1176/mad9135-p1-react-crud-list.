import { Button, Container } from 'react-bootstrap';
import { useState } from 'react';

const ListView = ({ data, setData }) => {
	const [editing, setEditing] = useState(false);
	const [editHeroName, setEditHeroName] = useState('');
	const [editCreator, setEditCreator] = useState('');
	const [editLink, setEditLink] = useState('');
	const [id , setId ]= useState('');
	const deleteItem = (e) => {
		e.preventDefault();
		let id = e.target.name;
		const index = data.findIndex((item) => item.id === id);
		if (index > -1) {
			data.splice(index, 1);
		}
		setData([...data]);
	};

	let editedObj = {
		id: Math.random().toString(36).substr(2, 9),
		name: editHeroName,
		creator: editCreator,
		url: editLink,
	};

	
	function startEdit(e) {
		e.preventDefault();
		setEditing(true);
		let id = e.target.name;
		setId(id)
	};

	function saveEdit(){
		console.log(id);
		const index = data.findIndex((item) => item.id === id);
		if (index > -1) {
			data.splice(index, 1, editedObj);
		}
		setData([...data]);
	}

	return (
		<>
			<Container>
				{editing ? (
					<form className="form" onSubmit={saveEdit}>
						<input
							value={editHeroName}
							onChange={(e) => setEditHeroName(e.target.value)}
							placeholder="Superhero Name"
							type="text"
							required
						/>
						<input
							value={editCreator}
							onChange={(e) => setEditCreator(e.target.value)}
							placeholder="Creator"
							type="text"
							required
						/>
						<input
							value={editLink}
							onChange={(e) => setEditLink(e.target.value)}
							placeholder="Add link"
							type="text"
							required
						/>
						<button type="submit">Save</button>
					</form>
				) : null}

				{data.length <= 0 ? (
					<h1>Please add Data</h1>
				) : (
					data.map((item) => (
						<div key={item.id}>
							<div className="infoCard">
								<div className="info">
									<h2>{item.name}</h2>
									<p>{item.creator}</p>
									<p>{item.url}</p>
								</div>
								<div className="buttons">
									<Button
										variant="warning"
										name={item.id}
										onClick={startEdit}
									>
										Edit
									</Button>
									<Button variant="danger" name={item.id} onClick={deleteItem}>
										Delete
									</Button>
								</div>
							</div>
						</div>
					))
				)}
			</Container>
		</>
	);
};

export default ListView;
