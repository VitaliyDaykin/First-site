import { useState } from 'react';
import { Navbar, Nav, Button, Container, Modal, Form } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const Styles = styled.div`
	a,  .navbar-nav, .nav-link{
		color: #adb1b8;
		text-decoration: none;
		&:hover{
			color: #0d6efd;
		}
		.active{
			color: #0d6efd;
		}
	}
	`

function NaviBar() {

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


	return (
		<>
			<Styles>
				<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
					<Container >
						<Navbar.Brand>Vetal81</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
								<Nav.Link><NavLink to="/users">Users</NavLink></Nav.Link>
								<Nav.Link><NavLink to="/about">About</NavLink></Nav.Link>
							</Nav>
							<Nav>
								<Button variant="primary" className="me-2" onClick={handleShow}>Log In</Button>
								<Button variant="primary" onClick={handleShow}>Sign out</Button>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</Styles>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Log In</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Remeber me" />
						</Form.Group>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default NaviBar;
