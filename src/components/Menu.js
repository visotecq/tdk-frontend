import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faCartShopping,faSignIn} from '@fortawesome/free-solid-svg-icons';

import Cart from './Cart';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Modal from 'react-bootstrap/Modal';
function Menu() {

  const [signinShow, setSigninShow] = useState(false);  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const Button = ({ id, children, title, onClick,className,style }) => (
    <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
      <button  style={style} onClick={onClick} className={className}>{children}</button>
    </OverlayTrigger>
  );
  return (
    
    <Navbar expand="lg" className="border-top" style={{backgroundColor:'#141E46',padding:0,borderColor:'#FEFDED'}}  >
      <Container fluid className='p-2 m-0' >        
        <Navbar.Brand href="#" className='logo-hover'>
        <img
              src="/images/logo_footer_viso.png"
              width="40"
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
            <Nav.Link href="/products" >Products</Nav.Link>
            <Nav.Link disabled className='no-divider'>|</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link disabled className='no-divider'>|</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link disabled className='no-divider'>|</Nav.Link>
            <Nav.Link href="#career">Career</Nav.Link>
            <Nav.Link disabled className='no-divider'>|</Nav.Link>
            <NavDropdown title="Miscellaneous" id="navbarScrollingDropdown" >
              <NavDropdown.Item href="#help">Help</NavDropdown.Item>
              <NavDropdown.Item href="#faqs">FAQs</NavDropdown.Item>
              <NavDropdown.Item href="#queries">Queries</NavDropdown.Item>
              <NavDropdown.Divider style={{ border:'1px solid white' }} />
              <NavDropdown.Item href="#action5">
                Connect with Us
              </NavDropdown.Item>
            </NavDropdown>
          
          </Nav>
      <Button onClick={handleShow} title={'Cart'} id="cart" style={{backgroundColor:'#141E46' , border:'0', color:'white'}} >
        <FontAwesomeIcon icon={faCartShopping} />
      </Button>
      <Button  onClick={()=>setSigninShow(true)}  title={'Sign In'} id="sign-in" style={{backgroundColor:'#141E46' , border:'0', color:'white'}} >
        <FontAwesomeIcon icon={faSignIn} />
      </Button>
          <Form className="d-flex ">
            <InputGroup >
              <Form.Control
                aria-describedby="search"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
             
              <Button title={'Search'} id="search" style={{backgroundColor:'#141E46' , border:'0', color:'white'}}>
              <FontAwesomeIcon icon={faSearch} />
              </Button>
            </InputGroup>
          </Form>
         
        </Navbar.Collapse>

        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
                 
          <Cart/>
        </Offcanvas.Body>
      </Offcanvas>
      <Modal
        size="sm"
        show={signinShow}
        onHide={setSigninShow}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton className='text-center singin-modal-back'>
          <Modal.Title id="example-modal-sizes-title-sm ">
          <h4 className='font-face-copperplate '> VISOTECQ</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
              <Form.Text id="passwordHelpBlock" muted>
                  <Nav.Link className='text-center text-primary'>Reset Password</Nav.Link>
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-primary" onClick={()=>setSigninShow(false)} title={'Sign In'}>
            Sign In
          </Button>
          <Button className="btn btn-info" onClick={()=>setSigninShow(false)} title={'Sign Up'}>
            Sing Up
          </Button>
        </Modal.Footer>
      </Modal>
      </Container>     
    </Navbar>
  );
}

export default Menu;