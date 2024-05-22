import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';


function Menu() {
  return (
    
    <Navbar expand="lg" className="border-top" style={{backgroundColor:'#141E46',padding:0,borderColor:'#FEFDED'}}  >
      <Container fluid className='p-2 m-0' >        
        <Navbar.Brand href="#" className='logo-hover'>
        <img
              src="/images/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
           
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"  style={{backgroundColor:'#FFF5E0'}}/>
        <Navbar.Collapse id="navbarScroll" className='px-2'>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link disabled className='no-divider'>|</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link disabled className='no-divider'>|</Nav.Link>
            <Nav.Link href="#packages">Packages</Nav.Link>
            <Nav.Link disabled className='no-divider'>|</Nav.Link>
            <NavDropdown title="Miscellaneous" id="navbarScrollingDropdown" >
              <NavDropdown.Item href="#help">Help</NavDropdown.Item>
              <NavDropdown.Item href="#faqs">FAQs</NavDropdown.Item>
              <NavDropdown.Item href="#queries">Queries</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Connect with Us
              </NavDropdown.Item>
            </NavDropdown>
          
          </Nav>
         
          <Form className="d-flex ">
            <InputGroup >
              <Form.Control
                aria-describedby="search"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
             
              <Button style={{ color:'#E2DFD0', backgroundColor:'#8DECB4'}} id="search">
              <FontAwesomeIcon icon={faSearch} />
              </Button>
            </InputGroup>
          </Form>
         
        </Navbar.Collapse>
      </Container>     
    </Navbar>
  );
}

export default Menu;