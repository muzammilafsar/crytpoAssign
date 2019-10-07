import React from 'react';
import './addnew.scss';
class AddNew extends React.Component {
  state = {
    type: 'text',
    name: ""
  }
  onDropdownChange = (e) => {
    this.setState({type: e.target.value});
  }
  onFieldNameChange = (e) => {
    if(/^[a-zA-Z ]+$/.test(e.target.value) || e.target.value === '') {
        console.log("tresad")
        this.setState({name: e.target.value});
    }
  }
  addField = (e) => {
    if(this.state.name && this.state.type) {
        this.props.addField(this.state);
        this.setState({name: ''});
    } else {
        alert("invalid field name")
    }
  }
  render() {
    return (
      <div className="addNew">
            <input type="text" placeholder={"enter field name"} value={this.state.name} onChange={this.onFieldNameChange}/>
            <select onChange={this.onDropdownChange} value={this.state.type}>
                <option value={"text"} >text</option>
                <option value={"number"}>number</option>
                <option value={"number"}>email</option>
                <option value={"number"}>password</option>
            </select>
            <button  className="btn btn-primary" onClick={this.addField}>Add Field</button>

      </div>
    );
  }
}

export default AddNew;
