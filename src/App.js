import React, { Component } from 'react';
import io from 'socket.io-client';
import './App.css';
import ChooseName from './ChooseName';
import Messages from './Messages';
import SubmitMessage from './SubmitMessage';
import JoinedNotification from './JoinedNotification';

// Being WebSocket
const socket = io();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      value: '',
      message: [],
      joined: [],
      userName: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setUserName = this.setUserName.bind(this);
  }

  componentDidMount() {
  
    let id = this.props.match.params.id;

    socket.on('connect', function() {
      socket.emit('room', id);
    });

    socket.on('chat message', (msg, userName) => {
      this.setState({ 
        message: [...this.state.message, `${userName}: ${msg}`]
      });
    });

    socket.on('Someone joined', () => {
      this.setState({ joined: [...this.state.joined, 'Someone joined the chat'] });
    });

    socket.on('Someone left!', () => {
      this.setState({ joined: [...this.state.joined, 'Someone left the chat'] });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    socket.emit('chat message', this.state.value, this.props.match.params.id, this.state.userName);
    this.setState({value: ''});
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  setUserName(userName) {
    this.setState({userName});
  }

  render() {
    return (
      <div className="App">
        {this.state.userName.length <= 0 
        ? <ChooseName setUserName={this.setUserName} />
        : <div>
          <Messages userName={this.state.userName} message={this.state.message} />
          <SubmitMessage handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit} 
            value={this.state.value} />
          <JoinedNotification joined={this.state.joined} /> 
          </div>
        }
      </div>
    );
  }
}

export default App;
