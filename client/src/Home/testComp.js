import React, { Component } from 'react';
import { connect } from 'react-redux';
import {check_if_password_change_required, set_change_password} from '../actions';

export default class testComp extends Component {
  constructor(props, context){
    super(props, context);
    // this.changePasswordSubmit = this.changePasswordSubmit.bind();
  }
  render(){
    console.log("test compo"+this.props);
    return (
      <div>
          sdfsd
      </div>
    );
  }
}
