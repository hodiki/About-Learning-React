import React, { Component } from 'react';
import './App.css';
import { node } from 'prop-types';


class Title extends Component{
  render(){
    const {title} = this.props
    return(
      React.createElement(
        'h1',
        {},
        title
      )
    );
  }
}


//非受控组件演示 ref
//and
//React高级API dangerouslySetInnerHTML 使用该API会有XSS风险
//and
//不使用jsx语法糖（有对比）
class App extends Component{
  //this.state=......
  state={
    html : '<div>Markdown</div>'
  }
  //this.submit=.......(例：一个箭头函数)
  submit=()=>{
    console.log(this.input.value)
  }
  //组件类(上面更好)
  submitt(){

  }

  render(){
    return(
      <div className='App'>
        
        <div 
        //dangerouslySetInnerHTML使用和对比示范
          dangerouslySetInnerHTML={
            {__html : this.state.html}
          }
        ></div>

        {this.state.html}


        <input
        //通过ref获取其dom
        ref={node =>{
          console.log('input')
          this.input = node
        }}
        type="text"/>
        <button onClick={this.submit}>提交</button>

        {/* div id='d1' onClick */}

        {/* jsx */}
        <div id='d1' onClick={e=>{window.alert('jsx')}}>
        你好，我来自jsx
        </div>
        <Title title="这是一个jsx创建的props"></Title>

        {/* React(无糖) */}
        {
          React.createElement(
            'div',
            {
              id : 'd1',
              onClick : (e)=>{
                window.alert('create element')
              }
            },
            '你好，我来自create element'
          )
        }
        {
          React.createElement(
            Title,
            {
              title : "这是来自createElement"
            }
          )
        }


        </div>
    );
  }
}

export default App;
