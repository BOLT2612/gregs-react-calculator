import React, { Component } from 'react';
import axios from 'axios';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yourEmail: '',
      yourMessage: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('An email address was submitted: ' + this.state.yourEmail + ' and a message was submitted: ' + this.state.yourMessage);
    event.preventDefault();

    axios.post('/send-email', {
      emailAddr: this.state.yourEmail,
      message: this.state.yourMessage
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    this.setState({
      yourEmail: '',
      yourMessage: ''
    })
  }

  render() {
    return (
        <div>
          <h2>Contact Component</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Your Email:<br />
              <input type="text" name="yourEmail" value={this.state.yourEmail} onChange={this.handleChange} />
            </label>
            <br />
            <label>
              Message:
              <br />
              <textarea 
                name="yourMessage" 
                rows="10" 
                cols="48" 
                onChange={this.handleChange} 
                value={this.state.yourMessage}>
              </textarea>
            </label>
            <br />
            <button type="submit">Send</button>
          </form>
        </div>
      )
  }
}