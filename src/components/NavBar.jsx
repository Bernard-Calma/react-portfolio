import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {

    // ADD ANIMATION CLASS
    const addTransitionLeft = () => {
        document.querySelector("#sectionExperience").children[2].classList.add("transitionRight")
        // console.log("Transition", document.querySelector("#sectionExperience"))
        setTimeout(() => {
            document.querySelector("#sectionExperience").children[2].classList.remove("transitionRight")
        }, 3000);
        
    }
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
                        <Nav.Link href="#aboutMe">About</Nav.Link>
                        <Nav.Link href="#sectionExperience" onClick={addTransitionLeft} >Experience</Nav.Link>
                        <Nav.Link href="#sectionWork">Projects</Nav.Link>
                        <Nav.Link href="#sectionContacts">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;