import React from 'react';
import './App.scss';
import FacebookAuth from './facebookLogin/facebookLogin';
import RegistrationPage from './registrationPage/registrationPage';

class App extends React.Component {
  state = {
    toggleAssignment: false
  }
  componentDidMount() {
   
  }
  toggleAssignment = () => {
    this.setState({toggleAssignment: !this.state.toggleAssignment});
  }
  render() {
    return (
      <div className="App">
        <button className="btn btn-primary toggle" onClick={this.toggleAssignment}>Switch Assignment</button>
        {
          this.state.toggleAssignment? 
          <FacebookAuth />
          :
          <RegistrationPage></RegistrationPage>
        }
      </div>
    );
  }
}

export default App;
