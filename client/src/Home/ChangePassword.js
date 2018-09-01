import React, { Component } from 'react';
import { connect } from 'react-redux';
import {check_if_password_change_required, set_change_password} from '../actions';
import testComp from './testComp';

class ChangePassword extends Component {
  constructor(props, context){
    super(props, context);
    this.ifPasswordValid = this.ifPasswordValid.bind(this);
    this.changePasswordSubmit = this.changePasswordSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      new_password: '',
      confirm_password: '',
      error_msg:''
    };
  }
  handleChange(e){
    e.preventDefault();
    // const val = isNan(e.target.value.charAt(e.target.value.length-1));
    this.setState({new_password:e.target.value});
  }


  changePasswordSubmit(e){
    if((this.state.new_password === this.state.confirm_password) && this.ifPasswordValid()){
        this.props.set_change_password();
    }else{
      this.setState({error_msg:"Password should be 8 characters and should contain atleast one numeric character"})
    }
  }


  ifPasswordValid(){
    let valid = false;
    for(let i=0; i<this.state.new_password.length; i++){
      if (!isNaN(this.state.new_password.charAt(i))) {
        return true;
      }
    }
    return false;
  }

  componentWillMount(){
    console.log('mounting change password');
    this.props.check_if_password_change_required();
  }

  render(){
    const {user} = this.props;
    console.log('Chnage passowrd: render rpromprt');
    const renderPrompt = user.change_password;
    // const renderPrompt = false;
    console.log('rendering change passwopr:'+ renderPrompt);
    return (
      <div>
        <testComp />
        { !renderPrompt && (
          <div>
            <h4>Please update your password</h4>
            <input type="password" value={this.state.new_password} onChange={this.handleChange} placeholder="New password" />
            <input type="password" value={this.state.confirm_password}  onChange={(e) => {
                e.preventDefault();
                this.setState({confirm_password:e.target.value});
              }}
                placeholder="Confirm password" />
            <button onClick={this.changePasswordSubmit}>Submit</button>
            <h4  >{this.state.error_msg}</h4>
            <hr/>
          </div>)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  };
}
export default connect(mapStateToProps,{
  check_if_password_change_required,
  set_change_password
})(ChangePassword);


// * At least 8 characters in length.
// * At least one numeric character
