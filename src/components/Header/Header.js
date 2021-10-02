import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <Container>
            <Navbar expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#">DevilList</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Active</Nav.Link>
                            <Nav.Link href="#action2">Complete</Nav.Link>
                            <Nav.Link href="#action2">Upcoming</Nav.Link>
                            <Nav.Link href="#action2">Trash</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;