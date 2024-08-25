import './App.css';
import {  Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Stack from 'react-bootstrap/Stack';
import Products from './pages/Products';
import Services from './pages/Services';
import Header from './components/Header';
import Col from 'react-bootstrap/Col';
import Filters from './components/Filters';
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
                  <Col xs={12}   md={6} lg={10}  >   
                    <Row>                 
                       
                      

                       <Routes>
                          <Route path="/products" element={<Products />} />
                          <Route path="/services" element={ <Services />} />
                      </Routes>

                    </Row>
                  </Col>
                 {/*  <Col  xs={12}   md={4} lg={2}  className='pb-2'>
                    <Cart />
                  </Col> */}
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
