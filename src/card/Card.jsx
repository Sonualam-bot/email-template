import "../Css/Card.css";

import premiumIcon from "../assets/annonce-asset/premiumFrame.svg";

export const Card = ({ data }) => {
  const { id, title, image, premium } = data;
  return (
    <>
      <div className="card" key={id}>
        {premium && (
          <div className="premium">
            <img src={premiumIcon} alt="premium" />
          </div>
        )}
        <div className="thumbnail-frame">
          <div className="button-container">
            <div className="thumbnail">
              <div className="bgcolor"></div>
              <div className="banner">
                <div className="banner2">
                  <img src={image} alt="announce" />
                </div>
              </div>

              <div className="card-button">
                <div className="card-button-special">
                  <button>Use this</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="title-frame">
          <p>{title}</p>
        </div>
      </div>
    </>
  );
};
