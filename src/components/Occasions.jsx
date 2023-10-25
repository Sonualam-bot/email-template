import { useContext } from "react";
import "../Css/Card.css";
import { EmailContext } from "../context/EmailContext";
import { Card } from "../card/Card";

import Error from "../assets/Error.png";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export const Occassions = () => {
  const { occasionsTemplate, cardContainerRef, scrollLeft, scrollRight } =
    useContext(EmailContext);
  return (
    <>
      <div className="parent-card-container">
        <h2>Occassions</h2>
        <div className="card-container" ref={cardContainerRef}>
          {occasionsTemplate.length > 0 ? (
            occasionsTemplate?.map((Ocassion) => {
              return <Card data={Ocassion} key={Ocassion.id} />;
            })
          ) : (
            <p className="fallbackmessage">
              No Occassion templates found. Please try a different search.
              <img src={Error} alt="error" />
            </p>
          )}
          <button className="arrow left-arrow" onClick={scrollLeft}>
            {" "}
            <AiOutlineArrowLeft />
          </button>
          <button className="arrow right-arrow" onClick={scrollRight}>
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};
