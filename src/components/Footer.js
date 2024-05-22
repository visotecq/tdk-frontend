import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
function Footer (){
    return (
        <div>
            <Container fluid className='p-0 m-0'>
                <Row className='menu-footer-back text-centre ' >
                    <Col sm={true} >
                       
                            <Nav defaultActiveKey="/" className="flex-column ">
                                <Nav.Link href="/" >Home</Nav.Link>
                                <Nav.Link href="link-1" >About Us</Nav.Link>
                                <Nav.Link href="link-2" >Products</Nav.Link>
                                <Nav.Link href="link-2" >Packages</Nav.Link>
                                
                            </Nav>

                        
                    </Col>
                    <Col sm={true}>
                        
                            <Image src='/images/logo_footer.png' height={150} width={150} className='rounded mx-auto d-block '/>
                            <p className='h4' style={{ color:'#E2DFD0' }}><strong>Always Good</strong>  </p>
                        
                    </Col>
                    <Col sm={true} >
                        
                            <Nav defaultActiveKey="/" className="flex-column">
                                    <Nav.Link href="/" >Help</Nav.Link>
                                    <Nav.Link href="link-1" >FAQs</Nav.Link>
                                    <Nav.Link href="link-2" >Queries</Nav.Link>
                                    <Nav.Link href="link-2" >Connect with Us</Nav.Link>
                                    
                            </Nav>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;