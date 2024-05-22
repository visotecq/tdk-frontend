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
                                    <NavLink href="#cakes">
                                        Cakes 
                                    </NavLink>
                                </ListGroup.Item> 
                                <ListGroup.Item>Breads </ListGroup.Item> 
                                <ListGroup.Item>Buns </ListGroup.Item> 
                                <ListGroup.Item>Pizza Base </ListGroup.Item> 
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" >
                            <Accordion.Header>
                                    Oil
                            </Accordion.Header>
                            <Accordion.Body>
                                <ListGroup variant="flush" >
                                    <ListGroup.Item>Amul Butter Made</ListGroup.Item>
                                    <ListGroup.Item>Rice Bran Oil Made</ListGroup.Item>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2" >
                            <Accordion.Header>
                                    Healthy
                            </Accordion.Header>
                            <Accordion.Body>
                                <ListGroup variant="flush" >
                                    <ListGroup.Item>Gluten Free</ListGroup.Item>
                                    <ListGroup.Item>Dairy Free</ListGroup.Item>
                                    <ListGroup.Item>Wheat Free </ListGroup.Item>                                 
                                    <ListGroup.Item>Millets Only</ListGroup.Item>
                                    <ListGroup.Item>Multigrain </ListGroup.Item>
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