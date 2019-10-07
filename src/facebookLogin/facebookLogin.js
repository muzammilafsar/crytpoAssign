import React from 'react';
import FacebookLogin from 'react-facebook-login';
class FacebookAuth extends React.Component {
  state = {
    loggedIn: false
  }
  componentDidMount() {
    if(sessionStorage.getItem("auth")) {
      this.setState({loggedIn: true});
    }
  }
  responseFacebook = (response) => {
    if(response.accessToken) {
        sessionStorage.setItem("auth", JSON.stringify(response));
        this.setState({loggedIn: true});
    }

  }
  logout = () => {
    sessionStorage.clear();
    this.setState({loggedIn: false});
  }
  render() {
    return (
      <div className="App">
        <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>
        {
          !this.state.loggedIn? 
          <FacebookLogin
            appId="402034536937127" //APP ID NOT CREATED YET
            fields="name,email,picture"
            callback={this.responseFacebook}
          />
          : <button onClick={this.logout}>Logout</button>
        }
      <br />
      <br />
      </div>
    );
  }
}

export default FacebookAuth;
