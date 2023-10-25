import { useContext, useRef } from "react";
import "../Css/Card.css";
import { EmailContext } from "../context/EmailContext";
import { Card } from "../card/Card";

import Error from "../assets/Error.png";

export const Announcement = () => {
  const { announcement } = useContext(EmailContext);

  const cardContainerRef = useRef(null);

  const scrollLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft -= 210;
    }
  };

  const scrollRight = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft += 210;
    }
  };

  return (
    <>
      <div className="parent-card-container">
        <h2>Announcement</h2>
        <div className="card-container" ref={cardContainerRef}>
          {announcement.length > 0 ? (
            announcement?.map((annonce) => (
              <Card data={annonce} key={annonce.id} />
            ))
          ) : (
            <p className="fallbackmessage">
              No announcement templates found. Please try a different search.
              <img src={Error} alt="error" />
            </p>
          )}

          <button className="arrow left-arrow" onClick={scrollLeft}>
            {" "}
            T{" "}
          </button>
          <button className="arrow right-arrow" onClick={scrollRight}>
            T
          </button>
        </div>
      </div>
    </>
  );
};
