import React, { Component } from "react";

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {

    const { name, value } = event.target;

    this.setState({
      [name]:value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();

    alert(`Hello ${this.state.username}!`);

    this.setState({
      username: "",
      password:""
    })
  }

  render() {
    return (
      <form>
        <p>Username: {this.state.username}</p>
        <p>Password: {this.state.password}</p>
        <input
          type="text"
          placeholder="Username"
          onChange={this.handleInputChange}
          name="username"
          value={this.state.username}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={this.handleInputChange}
          name="password"
          value={this.state.password}
        />
        <button onClick={this.handleFormSubmit}>Submit</button>
      </form>
    );
  }
}

export default Form;
