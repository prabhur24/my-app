import React,{Component} from 'react';

import Home from './home/home.jsx';

import './css/common.css';

export default class Counter extends Component{
    state = {
        value:1
    };

    render(){
        return(
            <div>
            <Home/>
            <div> 
        
        <div>{ this.state.value }</div>
        <button className ="Button" onClick={() => { this.setState({
            value:this.state.value +1
        }) }}>Increment</button>
        </div>
            </div>
        );
    }
}