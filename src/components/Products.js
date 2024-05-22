import React from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';import Badge from 'react-bootstrap/Badge';


const baseURL = "http://127.0.0.1:8080/api/products/";

function Products(){
    const [items, setItems] = React.useState(null);

    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setItems(response.data);
      });
    }, []);
    if (!items) 
      return null;
  
    const itemList = items.map((item) => 
     
    
        <Col sm={true} key={item.id} className="pb-2 d-flex justify-content-center" >
          <Card style={{ width: '18rem', borderColor:'#8DECB4',borderStyle: 'groove',borderWidth:'2px'  }} >
              <Card.Img variant="top" src={item.image_url}  style={{borderColor:'#8DECB4',borderStyle: 'solid',borderWidth:'2px'  }}  />
              <Card.Body style={{ backgroundColor:'#141E46' }}>
                <Card.Title >
                    <h6>{item.name}
                    <span className="px-2 ">
                      <FontAwesomeIcon icon={faStar} style={{ color:'#ffe234' }} ></FontAwesomeIcon>
                    4+
                    </span>
                     </h6>
                    
                </Card.Title>
             
                
                <Card.Text className="text-color-biege">
                    <label>{item.description}</label><br />
                    <label>
                      <strong>
                          Rs.100/- 
                      </strong>
                      <Badge bg="success">10% OFF</Badge>
                    </label>
                </Card.Text>
               
                <Button style={{ backgroundColor:"#F4CE14" , border:'solid', borderColor:'#FFF5E0' }}>Buy</Button>
              </Card.Body>
          </Card>
        </Col>
    
       
     
    );

    return itemList;
  
}

export default Products;