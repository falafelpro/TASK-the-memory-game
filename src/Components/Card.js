import React from "react";

export default function Card(props) {
  return (
    <div className="card" onClick={() => props.recordFlip(props.card.id)}>
      <img src={props.card.image} alt={props.card.id} />
    </div>
  );
}
