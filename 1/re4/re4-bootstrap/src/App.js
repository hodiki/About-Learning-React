import React, { Component } from 'react';
import './App.css';

import {
  Alert,
  Container,
  Col,
  Row,
  ButtonToolbar,
  Button,
  Panel
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Todo from './Todo';

class App extends Component{
  render(){
    return(
      // <div>
      //   <Todo></Todo>
      // </div>
      <div className="App">
        <Alert variant='danger'>
          这是一个危险的警告
        </Alert>
        <Container>
          <Row>
            <Col xs={12} md={3}>1</Col>
            <Col xs={12} md={3}>2</Col>
            <Col xs={12} md={3}>3</Col>
            <Col xs={12} md={3}>4</Col>
          </Row>
        </Container>
        <ButtonToolbar>
          <Button variant='primary'>
            主要按钮
          </Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button active={true} variant='primary' disabled={true} size='lg'>
            主要按钮2
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default App;
