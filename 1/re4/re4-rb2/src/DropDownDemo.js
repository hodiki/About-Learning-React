import React , {Component} from 'react'
import {Dropdown} from 'react-bootstrap'

const {
    Toggle,
    Menu,
    Item
} = Dropdown

class Demo extends Component{
    state ={
        selected : ""
    }
    render(){
        return(
            <div>
                <Dropdown drop={"right"} onToggle={(e)=>console.log('动啊铁奥！')} onSelect={(e)=>{
                    console.log(e);
                    this.setState({selected : e})
                    }}>
                    <Toggle>
                        {this.state.selected ? this.state.selected : "请选择"}
                    </Toggle>
                    <Menu>
                        <Item eventKey="baidu">百度</Item>
                        <Item eventKey="meituan">美团</Item>
                        <Item eventKey="didi">滴滴</Item>
                    </Menu>
                </Dropdown>
            </div>
        );
    }
}

export default Demo