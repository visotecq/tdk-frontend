import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import ListGroup from 'react-bootstrap/ListGroup';
function Cart(){
    return(
    
    <Container fluid >
    <Row>
        <Col className="m-0 p-0 menu-header-back text-center rounded ">
                    <h5 >Cart</h5>
              
                    <ListGroup variant="flush" className="overflow-auto cart-max-height text-left">
                        <ListGroup.Item>1 x Agri Drone : Rs.130000/-</ListGroup.Item>
                        <ListGroup.Item>2 x Brahma F4 : Rs. 4999/-</ListGroup.Item>
                        <ListGroup.Item>3 x 3D Mapping : Rs.50000/-</ListGroup.Item>
                    </ListGroup>
                    
                    <h5 >Total : Rs.30000/- only</h5>
        </Col>
       
    </Row>
</Container>
    
    );
}

export default Cart;