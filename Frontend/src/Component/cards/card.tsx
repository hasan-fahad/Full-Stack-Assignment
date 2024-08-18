import React from "react";
import './card.css'

const Card = ({ title, description }) => {
  return (
    <div className="card">
      <h2 className="title">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
