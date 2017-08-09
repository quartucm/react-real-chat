import React from 'react';

const SubmitMessage = (props) => (
  <form className="message-form" onSubmit={props.handleSubmit}>
    <input className="message-form__input" 
          autoComplete="off" value={props.value} 
          onChange={props.handleChange} />
    <button className="message-form__button">Send</button>
  </form>
)

export default SubmitMessage;