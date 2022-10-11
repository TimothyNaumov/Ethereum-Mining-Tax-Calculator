import {Nav, Navbar} from 'react-bootstrap'
import '../App.css';
import logo from '../logo.svg';

function NavigationBar() {
    return ( 
        <Navbar bg="dark" variant='dark' sticky='top' expand="lg" collapseOnSelect>
            <Navbar.Brand>
                <Nav.Link href='/'><div><img src={logo} width="40px" height="40px"/> Eth Tools</div></Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link href="/"> Generate 8949 Form</Nav.Link>
                    <Nav.Link href="/help" target="_Blank"> Help </Nav.Link>
                    <Nav.Link> Privacy Policy </Nav.Link>
                    <Nav.Link> About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
     );
}

export default NavigationBar;