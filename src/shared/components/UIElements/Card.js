import React from 'react';
import './Card.css';

const Card = props => {
  const classes = `card ${props.className} ${props.hoverable ? 'card--hoverable' : ''}`;
  return (
    <div className={classes} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
