import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Container, Row, Col } from 'react-bootstrap';

// Components
import SideBar from './components/partial/SideBar';
import Routes from './Routes';

function App() {
	return (
		<Router>
			<div>
				<Container fluid>
					<Row>
						<Col md={3}>
							<SideBar />
						</Col>
						<Col md={9}>
							<Routes />
						</Col>
					</Row>
				</Container>	
			</div>
		</Router>
	);
}

export default App;
