import { Button, Container } from 'react-bootstrap';

const ListView = ({ data, setData }) => {

	const deleteItem = (e) => {
		e.preventDefault();
		let id = e.target.name;
		const index = data.findIndex((item) => item.id === id);
		if (index > -1) {
			data.splice(index, 1);
		}

		console.log(data);
		setData([...data]);
	};

	let editedObj = {
		id: Math.random().toString(36).substr(2, 9),
		name: 'Catwoman',
		creator: 'DC Comics',
		url: 'https://www.dccomics.com/',
	};

	const editItem = (e) => {
		e.preventDefault();
		console.log('editing item');
		let id = e.target.name;
		const index = data.findIndex((item) => item.id === id);
		console.log(id);
		if (index > -1) {
			
			data.splice(index, 1, editedObj );
		}
		setData([...data]);
	};

	console.log(data);
    
	return (
		<>
			<Container>
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
									<Button variant="warning" name={item.id} onClick={editItem}>
										{' '}
										Edit{' '}
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
