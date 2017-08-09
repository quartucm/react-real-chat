import React from 'react';

const JoinedNotification = (props) => (
  <section className="notification">
    {props.joined.map((msg, index) => {
      return <article key={index}>{msg}</article>
    })}
  </section>
)

export default JoinedNotification;