import React,{Component} from 'react';

import logo from '../css/logo.png'
import '../css/common.css';

export default class Header extends Component{

    render(){
        return(
        <div className="header-bgnd">
             <div className="header-logo">
                <img src={logo} alt="Logo"/>
             </div>
             <div className="header-name">
                <div>   
                   <h2 className="header-slogan">Learn,Code & Break;</h2>
                </div>
             </div>
        </div>
        );
    }

}