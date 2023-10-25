import { useContext } from "react";
import "../Css/Card.css";
import { EmailContext } from "../context/EmailContext";
import { Card } from "../card/Card";
import Error from "../assets/Error.png";

export const Invitation = () => {
  const { invitationsTemplate } = useContext(EmailContext);
  return (
    <>
      <div className="parent-card-container">
        <h2>Invitation</h2>
        <div className="card-container">
          {invitationsTemplate.length > 0 ? (
            invitationsTemplate?.map((invitation) => {
              return <Card data={invitation} key={invitation.id} />;
            })
          ) : (
            <p className="fallbackmessage">
              No Invitation templates found. Please try a different search.
              <img src={Error} alt="error" />
            </p>
          )}
        </div>
      </div>
    </>
  );
};
