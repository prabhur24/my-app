import React,{Component} from 'react';

import './css/common.css';

export default class Counter extends Component{
    state = {
        value:1
    };

    render(){
        return(
        <div className="Container"> 
        <div>{ this.state.value }</div>
        <button className ="Button" onClick={() => { this.setState({
            value:this.state.value +1
        }) }}>Increment</button>
        </div>
        );
    }
}