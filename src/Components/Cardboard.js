import React from "react";
import Card from "./Card";
import cardsContent from "../cardContent";
import { useState } from "react";

export default function Cardboard() {
  const [clickedCard, setClickedCard] = useState("");

  const cardDeck = cardsContent.map((card) => <Card card={card} />);

  return (
    <div className="cardboard">
      <div className="cards"> {shuffle(cardDeck)}</div>
    </div>
  );
}
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
