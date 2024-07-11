import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function NavigationBar() {
    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="/">Shop Now</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/" activeClassName="active">
                        Home
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/marvel-character" activeClassName="active">
                        Marvel Character
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/marvel-detail" activeClassName="active">
                        Marvel Detail
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
