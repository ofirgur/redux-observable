import React from 'react';
import { connect } from 'react-redux';

import { setPing } from '../actions/pingActions';
import { fetchUser, cancelFetchUser } from '../actions/userActions';

// let App = ({ isPinging, setPing }) => (
//   <div>
//     <h1>is pinging: {isPinging.toString()}</h1>
//     <button onClick={setPing}>Start PING</button>
//   </div>
// );

// App = connect(
//   ({ isPinging }) => ({ isPinging }),
//   { setPing }
// )(App);

// export default App;

class App extends React.Component {  
    render() {
        return (
          <div>
            <h1>is pinging: {this.props.ping.isPinging.toString()}</h1>
            <button onClick={this.props.setPing}>Start PING</button>
            <br />
            <hr />
            <h1>username: {this.props.user.login}</h1>
            <button onClick={ () => this.props.fetchUser('torvalds')}>Fetch Name</button>
            <button onClick={ () => this.props.cancelFetchUser()}>Cancel</button>

            <span>{this.props.isFetchingUser ? '(Loading...)' : ''}</span>
            <div>
            { this.props.fetchUserError ? <p>ERROR:  { this.props.fetchUserError.message }</p> : '' }
              
              
             
            </div>

            <br />
            <hr />
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {        
        ping: state.ping,
        user: state.user,
        isFetchingUser: state.isFetchingUser,
        fetchUserError: state.fetchUserError
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPing: () => {
            dispatch(setPing());
        },
        fetchUser: (username) => {
          dispatch(fetchUser(username));
        },
        cancelFetchUser: () => {
            dispatch(cancelFetchUser());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);