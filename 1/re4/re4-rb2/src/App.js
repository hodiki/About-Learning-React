import React, { Component } from 'react';
import './App.css';

import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//下拉框
import DropDownDemo from './DropDownDemo'
//进度条
import ProgressBar from './ProgressDemo'
//模态框
import ModalDemo from './ModalDemo'

class App extends Component{
  render(){
    return(
      <div className="App">
        <Container>
          <DropDownDemo></DropDownDemo>
          <ProgressBar></ProgressBar>
          <ModalDemo></ModalDemo>
        </Container>
      </div>
    );
  }
}

export default App;
