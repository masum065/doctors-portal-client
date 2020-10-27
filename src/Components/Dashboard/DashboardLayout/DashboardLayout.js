import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

const DashboardLayout = (props) => {
	return (
		<Container fluid>
			<Row>
				<Col style={{ paddingLeft: '0' }} xl={2}>
					<Sidebar />
				</Col>

				<Col xl={10}>
					<Row>
						<Col xl={{ span: 6, offset: 2 }}>
							<h3>{props.heading}</h3>
						</Col>
					</Row>
					<Row>{props.children}</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default DashboardLayout;
