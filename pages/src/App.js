import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Main from './components/main';
import Sidebar from './components/sidebar';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <h3>SpaceX Launch Program</h3>
        <Container>
          <Row>
            <Col xs={12} md={3} sm={2}>
              <Sidebar />
            </Col>
            <Col sm={10} md={9} xs={12}>
              <Main />
            </Col>
          </Row>
        </Container>
        <Footer/>
      </React.Fragment>
    </div>
  );
}

export default App;
