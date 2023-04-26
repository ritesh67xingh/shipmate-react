import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../media/ShipmateLogo.png'
import {BiDollar} from 'react-icons/bi'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Index.css'
import { Button } from 'react-bootstrap';


function NavElement() {
  return (
    <Navbar sticky expand="lg">
      <Container fluid className="mx-5">
        <Navbar.Brand href="/">
        <img
              src={logo}
              width="170"
              height="39"
              className="d-inline-block align-top"
              alt="Shipmate Logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/"><Button className='dollar-sign py-0 my-0 px-2' variant="outline-primary"><BiDollar/></Button></Nav.Link>
            <Nav.Link className="mx-3" href="/"><Button className='track-sign' variant="primary">Track Shipment</Button>{' '}</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavElement;