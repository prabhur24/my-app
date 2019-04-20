import React,{Component} from 'react';

import Header from './common/header.jsx';

import Footer from './common/footer.jsx';

import './css/common.css';

export default class Counter extends Component{
    state = {
        value:1
    };

    render(){
        return(
            <div className="web-bgnd">
                <Header/>
                 <div>
                     <div>{ this.state.value }</div>
                     <button className ="Button" onClick={() => { this.setState({
                                value:this.state.value +1
                                }) }}>Increment</button>
                  </div>
                  <Footer/>
            </div>
        );
    }
}