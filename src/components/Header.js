import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookSquare,  faInstagramSquare, faTwitterSquare,  faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import {faMobileScreen} from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
<Container className='' fixed="top" fluid>
    <Row className='justify-content-between menu-header-back'>
        <Col>
          <p className="mb-0 phone">   <FontAwesomeIcon icon={faMobileScreen} style={{ background:'whitesmoke' }} /><a href="#phone">+91 73025 36237</a></p>
        </Col>
        <Col className='d-flex justify-content-end'>
          <div className="social-media">
            <p className="mb-0 d-flex">
              <a href="#fb" className="d-flex align-items-center justify-content-center"> <FontAwesomeIcon icon={faFacebookSquare} /></a>
              <a href="#tw" className="d-flex align-items-center justify-content-center"> <FontAwesomeIcon icon={faTwitterSquare} /></a>
              <a href="#insta" className="d-flex align-items-center justify-content-center"><FontAwesomeIcon icon={faInstagramSquare} /></a>
              <a href="#dribble" className="d-flex align-items-center justify-content-center"><FontAwesomeIcon icon={faYoutubeSquare} /></a>
            </p>
          </div>
        </Col>
    </Row>
  </Container>
    );

}
export default Header;