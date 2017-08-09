import React from 'react';

const Messages = (props) => (
  <ul className="messages">
    {props.message.map((item, index) => {
      return <li key={index}>{item}</li>;
    })}
  </ul>
)
export default Messages;
