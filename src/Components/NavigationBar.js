import {Nav, Navbar} from 'react-bootstrap'
import '../App.css';
import logo from '../assets/eth-svg.svg';

function NavigationBar() {
    return ( 
        <Navbar bg="dark" variant='dark' sticky='top' expand="lg" collapseOnSelect>
            <Navbar.Brand>
                <Nav.Link href='/'>
                    <div style={{paddingLeft: "10px"}}>
                        <img src={logo} width="40px" alt="eth logo"/>
                    </div>
                </Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link href="/"> Generate 8949 Form</Nav.Link>
                    <Nav.Link href="/help" target="_Blank"> Help </Nav.Link>
                    <Nav.Link href="/about" target="_Blank"> About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
     );
}

export default NavigationBar;