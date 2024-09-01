import React from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';
import { CardFooter } from "react-bootstrap";


const baseURL = "http://127.0.0.1:8080/api/services/";

function Services(){
    const [items, setItems] = React.useState(null);

    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setItems(response.data);
      });
    }, []);
    if (!items) 
      return null;
    console.log(items)
    const itemList = items.map((item) => 
     
    
        <Col sm={true} key={item.id} className="pb-2 d-flex justify-content-center" >
          <Card style={{ width: '18rem', borderRadius:'0 !important'  }} >
              <Card.Img variant="top" src={item.image_url}  style={{borderRadius:'0'  }} height={'200px'} />
              <Card.Body style={{ backgroundColor:'#141E46' }}>
                <Card.Title >
                    <h6>{item.name}
                    <span className="px-2 ">
                      <FontAwesomeIcon icon={faStar} style={{ color:'#ffe234' }} ></FontAwesomeIcon>
                    4+
                    </span>
                     </h6>
                    
                </Card.Title>
             
                
              {/*   <Card.Text className="text-color-biege">
                    <label>{item.description}</label><br />
                    <label>
                      <strong>
                          Rs.{item.price}/- 
                      </strong>
                      <Badge bg="success">{item.discount}% OFF</Badge>
                    </label>
                </Card.Text> */}
                
              </Card.Body>
              <CardFooter className="text-centre">
                <Button style={{ borderRadius:'4px' }}>ENQUIRE NOW</Button>
                {/* <Button className="btn-warning" style={{ borderRadius:'4px', marginLeft: '50px'}}>Add to Cart</Button>
                */}
                </CardFooter>
          </Card>
        </Col>
    
       
     
    );

    return itemList;
  
}

export default Services;