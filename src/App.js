import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Stack from 'react-bootstrap/Stack';
import Products from './components/Products';
import Header from './components/Header';
import Col from 'react-bootstrap/Col';
import Filters from './components/Filters';
import Cart from './components/Cart';
function App() {
 
  return (
    <div>   
     
        <Stack gap={1} >
            <div>
              <Container fluid className='p-0'>
                <Header />
                  <Menu />
              </Container> 
            </div>
            <div className="">
            <Container fluid >
                <Row>
                  <Col  xs={12}  md={4} lg={2} className='pb-2'>
                    <Filters />
                  </Col>
                  <Col xs={12}   md={4} lg={8}  >   
                    <Row>                 
                       <Products />
                    </Row>
                  </Col>
                  <Col  xs={12}   md={4} lg={2}  className='pb-2'>
                    <Cart />
                  </Col>
                </Row>
              </Container>              
            </div>
            <div >
              <Container fluid>
                    <Footer />
              </Container>         
            </div>
        </Stack>

    </div>
  );
}

export default App;
