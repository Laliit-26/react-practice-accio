import React, { Component } from 'react'

export default class ClassBasic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            date:new Date()
        }
    }
  set=()=>{
        this.setState(prev => ({ count: prev.count + 1 }));
    };
    componentDidMount(){
       this.timer= setInterval(() => {
            this.tick();
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    tick = () => {
        this.setState({ date: new Date() })
    }
 
    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={this.set}>increment</button>
                {this.state.date.getSeconds()}
            </div>
        )
    }
}
// ()=>this.setState({count:this.state.count+1})