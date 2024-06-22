import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import NavLink from "react-bootstrap/esm/NavLink";
function Filters(){
    return(
    
    <Container fluid >
    <Row>
        <Col className="m-0 p-0 menu-header-back text-center rounded ">
                    <h5 >Filter</h5>

                    <Accordion className="overflow-auto filter-max-height filter-link" flush >
                        <Accordion.Item eventKey="0" >
                            <Accordion.Header>
                                    All
                            </Accordion.Header>
                            <Accordion.Body >
                                <ListGroup variant="flush" >
                                <ListGroup.Item>
                                    <NavLink href="#FB">
                                        Frequently Bought
                                    </NavLink>
                                    
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <NavLink href="#TR">
                                        Top Rated
                                    </NavLink>
                                </ListGroup.Item>                                
                                <ListGroup.Item>
                                    <NavLink href="#md">
                                        Military Drone 
                                    </NavLink>
                                </ListGroup.Item> 
                                <ListGroup.Item>Photography Drone </ListGroup.Item> 
                                <ListGroup.Item>Modelling Drone </ListGroup.Item> 
                                <ListGroup.Item>Agri Drone </ListGroup.Item> 
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" >
                            <Accordion.Header>
                                    Drone Components
                            </Accordion.Header>
                            <Accordion.Body>
                                <ListGroup variant="flush" >
                                    <ListGroup.Item>Motors</ListGroup.Item>
                                    <ListGroup.Item>Rotors</ListGroup.Item>
                                    <ListGroup.Item>Flight Controllers</ListGroup.Item>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2" >
                            <Accordion.Header>
                                    Battery Packs
                            </Accordion.Header>
                            <Accordion.Body>
                                <ListGroup variant="flush" >
                                    <ListGroup.Item>3s Packs</ListGroup.Item>
                                    <ListGroup.Item>4s packs</ListGroup.Item>
                                    <ListGroup.Item>5s Packs</ListGroup.Item>                                 
                                    <ListGroup.Item>6s Packs</ListGroup.Item>
                                    <ListGroup.Item>Tx Rx Lipo </ListGroup.Item>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                   
                   
        </Col>
       
    </Row>
</Container>
    
    );
}

export default Filters;