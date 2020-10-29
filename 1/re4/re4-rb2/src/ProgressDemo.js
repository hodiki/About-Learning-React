import React , {Component} from 'react'
import {ProgressBar} from 'react-bootstrap'


class Demo extends Component{
    state ={
        now : 0
    }
    componentDidMount(){
        this.timer = window.setInterval(()=>{
            var {now} = this.state
            if(now <= 100){
                this.setState({
                    now : now + 1
                })
            }else{
                window.clearInterval(this.timer)
            }
        },200)
    }
    componentWillUnmount(){
        clearInterval(this.timer)

    }
    render(){
        return(
            <div>
                <ProgressBar now={this.state.now} label={`${this.state.now}%`}>

                </ProgressBar>
            </div>
        );
    }
}

export default Demo