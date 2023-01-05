import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar bg="light" expand="md">
            <Container>
                <Navbar.Brand>
                    <img 
                       src="/images/TitleLogo.png" 
                       alt="Title Logo"
                       width="100"
                       className="logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse id="navbar">
                    <Nav className="navigation">
                        <Nav.Link href="#home">About</Nav.Link>
                        <Nav.Link href="#sectionExperience">Experience</Nav.Link>
                        <Nav.Link href="#home">Projects</Nav.Link>
                        <Nav.Link href="#home">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;