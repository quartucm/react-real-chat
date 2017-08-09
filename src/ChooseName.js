import React, { Component } from 'react';

class ChooseName extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      username: '' 
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({username: event.target.value});
  }
  
  render() {
    return (
      <form onSubmit={this.props.setUserName.bind(null, this.state.username)}> 
        <input type="text" onChange={this.handleChange} value={this.state.username} placeholder="Please enter your name" />
        <button type="submit">Join Room</button>
      </form>
    )
  }
}

export default ChooseName; 
