import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
function Footer (){
    return (
        <div>
            <Container fluid className='p-0 m-0 '>
                <Row className='menu-footer-back text-centre ' >
                    <Col sm={true} >
                       
                         {/*    <Nav defaultActiveKey="/" className="flex-column ">
                                <Nav.Link href="/" >Home</Nav.Link>
                                <Nav.Link href="link-1" >About Us</Nav.Link>
                                <Nav.Link href="link-2" >Products</Nav.Link>
                                <Nav.Link href="link-3" >Services</Nav.Link>
                                <Nav.Link href="link-4" >Blog</Nav.Link>
                                <Nav.Link href="link-5" >Career</Nav.Link>
                                
                            </Nav> */}
                        <h5 className='font-face-copperplate'>VISOTECQ</h5>
                        <div className="flex-column ">
                                <Nav.Link href="/" >Home</Nav.Link>
                                <Nav.Link href="link-1" >About Us</Nav.Link>
                                <Nav.Link href="link-2" >Products</Nav.Link>
                                <Nav.Link href="link-3" >Services</Nav.Link>
                                <Nav.Link href="link-4" >Blog</Nav.Link>
                                <Nav.Link href="link-5" >Career</Nav.Link>
                        </div>
                        
                    </Col>
                    <Col sm={true}>
                        
                            <Image src='/images/logo_footer_viso.png' height={150} width={200} className='rounded mx-auto d-block '/>
                            <p className='h4 font-face-copperplate' style={{ color:'#E2DFD0',textTransform:'uppercase' }}><strong>vison and technology</strong>  </p>
                        
                    </Col>
                    <Col sm={true} >
                        
                          {/*   <Nav defaultActiveKey="/" className="flex-column">
                                    <Nav.Link href="/" >Help</Nav.Link>
                                    <Nav.Link href="link-1" >FAQs</Nav.Link>
                                    <Nav.Link href="link-2" >Queries</Nav.Link>
                                    <Nav.Link href="link-2" >Connect with Us</Nav.Link>

                            </Nav> */}
                            <h5>LINKS</h5>
                            <div className="flex-column ">
                                    <Nav.Link href="/" >Help</Nav.Link>
                                    <Nav.Link href="link-1" >FAQs</Nav.Link>
                                    <Nav.Link href="link-2" >Queries</Nav.Link>
                                    <Nav.Link href="link-2" >Connect with Us</Nav.Link>
                        </div>
                    </Col>
                </Row>
                <Row style={{borderTop:'solid 2px white'}} className='menu-footer-back text-centre ' >
                    <Col>
                        <p>Powered by <a href='#visotecq' className='font-face-copperplate'>VISOTECQ</a></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;