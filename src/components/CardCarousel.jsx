import { useState } from "react";
import { Card } from "../card/Card";

const CardCarousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const moveRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="card-carousel">
      <button onClick={moveLeft}>Left</button>
      {cards.map((card, index) => (
        <div
          key={index}
          className={`card ${index === currentIndex ? "active" : ""}`}
        >
          {/* Render your card component here */}
          <Card data={card} key={card.id} />
        </div>
      ))}
      <button onClick={moveRight}>Right</button>
    </div>
  );
};

export default CardCarousel;
