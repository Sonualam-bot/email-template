import { useContext } from "react";
import "../Css/Card.css";
import { EmailContext } from "../context/EmailContext";
import { Card } from "../card/Card";

import Error from "../assets/Error.png";

export const Occassions = () => {
  const { occasionsTemplate } = useContext(EmailContext);
  return (
    <>
      <div className="parent-card-container">
        <h2>Occassions</h2>
        <div className="card-container">
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
        </div>
      </div>
    </>
  );
};
