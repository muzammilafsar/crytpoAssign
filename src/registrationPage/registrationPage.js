import React from 'react';
import AddNew from './addnew';
import './registrationpage.scss';
class RegistrationPage extends React.Component {
  state = {
    name: {
        type: 'text',
        value: ''
    },
    email: {
        type: 'email',
        value: ''
    },
    gender: {
        type: 'text',
        value: ''
    },
    country: {
        type: 'text',
        value: ''
    }
  }
  componentDidMount() {
   
  }
  formChange = (e, field) => {
      this.setState({
          [field] : e.target.value
      })
  }
  onDropdownChange = (e) => {
    console.log(e.target.value);
  }
  addField = (obj) => {
    if(this.state[obj.name]) {
        alert("already exits");
    } else {
        this.setState({
            [obj.name] : {
                type: obj.type,
                value: ''
            }
        })
    }
  }
  onSubmit = (e) => {
    e.preventDefault();
    console.log((e.target));
    console.log((this.state));
  }
  render() {
      let state = this.state;
    return (
      <div className="registration">
        <div>
            <form onSubmit={this.onSubmit}>
                {
                    Object.keys(this.state).map((val, i) => <div key={i+'form'}>
                        <label htmlFor={val} className="custom-label">{val.toUpperCase()} : </label>
                        <input id={val} type={state[val].type} value={state[val].value} onChange={(e) => {
                            this.formChange(e,val)
                        }}></input>
                    </div>)
                }
                <button type="submit" className="btn btn-primary"> Submit</button>
            </form>
           <AddNew addField={this.addField}/>
        </div>
      </div>
    );
  }
}

export default RegistrationPage;
