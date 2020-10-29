import React , {Component} from 'react'
import {Modal , Button} from 'react-bootstrap'

const{
    Dialog,
    Title,
    Body,
    Footer,
    Header
}=Modal

class Demo extends Component{
    state ={
        show : false
    }
    _handleShow = ()=>{
        this.setState({
            show : true
        })
    }
    _handleHide = ()=>{
        this.setState({
            show : false
        })
    }
    render(){
        return(
            <div>
                <Button onClick={this._handleShow} variant="outline-primary">名副其实，最后的时间停止</Button>
                <Modal show={this.state.show} onHide={this._handleHide}>
                    <Header closeButton>
                        <Title>泷泽萝拉哒！！！</Title>
                    </Header>
                    <Body>
                        <p>欧拉欧拉欧拉</p>
                        <p>木大木大木大</p>
                    </Body>
                    <Footer>
                        <Button variant="secondary">不老不死</Button>
                        <Button variant="primary">屎蛋都怕我!</Button></Footer>
                </Modal>
            </div>
        );
    }
}

export default Demo