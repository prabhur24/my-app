import React,{Component} from 'react';

import logo from '../css/header/logo.png'
import '../css/header/header.css';

export default class Header extends Component{

    render(){
        return(
        <div>
        <img src={logo} alt="Logo" class="right-header" />
        <h4 class="header-row">Everything At once </h4>
        </div>
        );
    }

}