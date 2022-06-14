import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
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
                    <Nav.Link href="/linkwallet"> Link Wallet</Nav.Link>
                    <Nav.Link href="/uploadCSV"> Upload Coinbase Transactions</Nav.Link>
                    <Nav.Link href="/viewCapitalDifference"> Generate 8949 Report</Nav.Link>
                    <NavDropdown title="Help">
                        <NavDropdown.Item>How to link public Ethereum wallet</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item>How to get Coinbase CSV</NavDropdown.Item>
                        <NavDropdown.Item>How to upload Coinbase CSV</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link> About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
     );
}

export default NavigationBar;