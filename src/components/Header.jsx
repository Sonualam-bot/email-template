import "../Css/Header.css";

export const Header = () => {
  return (
    <>
      <div className="hero-marketplace">
        <div className="hero-content">
          <h3 className="marketplace">marketplace</h3>
          <div className="hero-title">
            <div className="dynamic">
              <h1 className="line">Email Templates</h1>
              <h1 className="line">Email Sequences</h1>
              <h1 className="line">Marketing Recipies</h1>
            </div>
            <div className="static">
              <h2>by the community, for the community.</h2>
            </div>
          </div>
          <div className="text">
            <p>
              100s of free templates to help you craft the perfect marketing
              journey.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
