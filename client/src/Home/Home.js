import React, { Component } from 'react';
import { connect } from 'react-redux';
import Graph from './Graph';
import {user1} from '../constants/users';
import { user1_data_url, user2_data_url } from '../constants/ApiURLs';
import {get_graph_data} from '../actions';

class Home extends Component {
  constructor(props, context){
    super(props, context);
    this.renderLoggedIn = this.renderLoggedIn.bind(this);
    console.log('user'+ this.props);
  }

  login() {
    this.props.auth.login();
  }
  renderLoggedIn(user){
    console.log('user ' + user + " cons: "+ user1);
    if(user == user1){
      // console.log('user'+ this.props);
      this.props.get_graph_data(user1, '/user1_data', this.props.history, this.props.dispatch);

    }else{
      console.log('asda');
    }
    return (
      <div>
        <div>
          <h4>
            You are logged in! Welcome {user}
          </h4>
          <Graph userName={user} {...this.props}></Graph>
        </div>
      </div>
    );
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    const user = isAuthenticated()
    console.log('loaded home');
    return (
      <div className="container">
        {
          user && this.renderLoggedIn(user)
        }
        {
          !user && (
              <h4>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h4>
            )
        }
      </div>
    );
  }
}

// export default Home
function mapStateToProps(state) {
  const { user } = state;
  return {
  };
}
export default connect(mapStateToProps,{
  get_graph_data
})(Home);
// export default connect(mapStateToProps)(Home);
