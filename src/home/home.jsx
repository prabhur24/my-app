import React, {Component} from 'react';

import Header from '../common/header'

export default class Home extends Component{
      state={
         homeCounter:1
      };

      render(){
          return(
               <Header/>
          );
      }
}