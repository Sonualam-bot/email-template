import { useContext } from "react";
import "../Css/Card.css";
import { EmailContext } from "../context/EmailContext";
import { Card } from "../card/Card";
import Error from "../assets/Error.png";

export const EducateNInform = () => {
  const { educateInformTemplate } = useContext(EmailContext);
  return (
    <>
      <div className="parent-card-container">
        <h2>Educate & Inform</h2>
        <div className="card-container">
          {educateInformTemplate.length > 0 ? (
            educateInformTemplate?.map((educate) => {
              return <Card data={educate} key={educate.id} />;
            })
          ) : (
            <p className="fallbackmessage">
              No Educate & Inform templates found. Please try a different
              search.
              <img src={Error} alt="error" />
            </p>
          )}
        </div>
      </div>
    </>
  );
};
