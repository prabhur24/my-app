import React,{Component} from 'react'


import logo from '../css/logo.png'
import '../css/common.css';

import Constant from '../const/constant.jsx'


export default class Footer extends Component{
    
     render(){
         return(
            <div className="footer-bgnd">
            <div>
                 <div className="footer-name">  
                     <span>Email: rajendranprabhu.r@gmail.com  <br></br>
                      Contact : +91-9538500324<br></br>
                      <h6> © 2019 {Constant.getName}. All rights reserved.</h6>
                      </span> 
                  </div>
                 <div className="footer-logo">
                     <img src={logo} alt="Logo"/>
                 </div>
            </div>
            </div>
         )
     }
}