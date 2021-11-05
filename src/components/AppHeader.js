import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';
const AppHeader = () => {
	return (
		<div>
			<Container>
				<div className="header">
                    <Link to="/">
					<h2 className="title">SuperHeros</h2>
                    </Link>
					<Link to="/addnewitem">
						<Button>+ New</Button>
					</Link>
				</div>
			</Container>
		</div>
	);
};

export default AppHeader;
