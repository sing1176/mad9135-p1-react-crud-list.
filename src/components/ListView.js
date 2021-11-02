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

	console.log(data);
    
	return (
		<>
			<Container>
				{ 

				data.length <= 0 ? <h1>Please add Data</h1> :
				data.map((item) => (
					<div key={item.id}>
						<div className="infoCard">
							<div className="info">
								<h2>{item.name}</h2>
								<p>{item.creator}</p>
								<p>{item.url}</p>
							</div>
							<div className="buttons">
								<Button variant="warning"> Edit </Button>
								<Button variant="danger" name={item.id} onClick={deleteItem}>
									Delete
								</Button>
							</div>
						</div>
					</div>
				))}
			</Container>
		</>
	);
};

export default ListView;
