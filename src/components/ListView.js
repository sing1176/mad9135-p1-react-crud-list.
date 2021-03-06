import { Button, Container, Modal } from 'react-bootstrap';
import { useState } from 'react';

const ListView = ({ data, setData }) => {
	const [editing, setEditing] = useState(false);
	const [editHeroName, setEditHeroName] = useState('');
	const [editCreator, setEditCreator] = useState('');
	const [editLink, setEditLink] = useState('');
	const [id, setId] = useState('');
	const [modalShow, setModalShow] = useState(false);


	const showModal = (e) => {
		setModalShow(true);	
		setId(e.target.name);
	};

	 function deleteItem(){
		 console.log('here');
		 console.log(id);
			const index = data.findIndex((item) => item.id === id);
			if (index > -1) {
				data.splice(index, 1);
			}
			setData([...data]);
			setModalShow(false);	
		}

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
		setId(id);
	}

	function saveEdit() {
		const index = data.findIndex((item) => item.id === id);
		if (index > -1) {
			data.splice(index, 1, editedObj);
		}
		setData([...data]);
		setEditing(false);
	}

	function cancelEdit() {
		setEditing(false);
	}

	//Modal

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
						Delete this item?
					</Modal.Title>
				</Modal.Header>
				<Modal.Footer>
					<div className="modalBtn">
					<Button className="text-center" variant="danger" onClick={deleteItem}>Yes</Button>
					<Button onClick={props.onHide}>No</Button>
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
				{/* Check if there is no Data then Display Message */}

				{data.length <= 0 ? (
					<h1>Please add New SuperHeros</h1>
				) : // Else Check if you are editing
				// and If you are editing

				editing ? (
					data.map((item) => (
						<div key={item.id}>
							{/* Check if Item id is same as edit Id then replace that card with the form */}

							{item.id === id ? (
								<div className="editForm">
									<form onSubmit={saveEdit}>
										<input
											value={editHeroName}
											onChange={(e) => setEditHeroName(e.target.value)}
											placeholder={item.name}
											type="text"
											required
										/>
										<input
											value={editCreator}
											onChange={(e) => setEditCreator(e.target.value)}
											placeholder={item.creator}
											type="text"
											required
										/>
										<input
											value={editLink}
											onChange={(e) => setEditLink(e.target.value)}
											placeholder={item.url}
											type="url"
											required
										/>
										<Button variant="dark" type="submit">
											Save
										</Button>
										<Button variant="secondary" onClick={cancelEdit}>
											Cancel
										</Button>
									</form>
								</div>
							) : (
								// Otherwise Build cards Normally

								<div className="infoCard">
									<div className="info">
										<h2>{item.name}</h2>
										<p>{item.creator}</p>
										<p>{item.url}</p>
									</div>
									<div className="buttons">
										<Button variant="dark" name={item.id} onClick={startEdit}>
											<i class="bi bi-pencil-square"></i>
										</Button>
										<Button
											variant="secondary"
											name={item.id}
											onClick={showModal}
										>
											Delete
										</Button>
									</div>
								</div>
							)}
							<div></div>
						</div>
					))
				) : (
					// Else Build Cards

					data.map((item) => (
						<div key={item.id}>
							<div className="infoCard">
								<div className="info">
									<h2>{item.name}</h2>
									<p>{item.creator}</p>
									<p>{item.url}</p>
								</div>
								<div className="buttons">
									<Button variant="dark" name={item.id} onClick={startEdit}>
										Edit

									</Button>
									<Button
										variant="secondary"
										name={item.id}
										onClick={showModal}
									>
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
