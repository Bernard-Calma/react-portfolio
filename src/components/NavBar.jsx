import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar bg="light" expand="md" className="navbar">
            <Container>
                <Navbar.Brand> Bernard Calma</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar"/>
                <Navbar.Collapse id="navbar">
                    <Nav className="navigation">
                        <Nav.Link href="#home">About</Nav.Link>
                        <Nav.Link href="#home">Experience</Nav.Link>
                        <Nav.Link href="#home">Projects</Nav.Link>
                        <Nav.Link href="#home">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;