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
              
                    <ListGroup variant="flush" className="overflow-auto cart-max-height">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    </ListGroup>
                    
            
        </Col>
       
    </Row>
</Container>
    
    );
}

export default Cart;