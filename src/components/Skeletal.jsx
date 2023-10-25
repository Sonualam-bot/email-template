import Skeleton from "react-loading-skeleton";

import "../Css/Skeletal.css";

export const Skeletal = () => {
  return (
    <>
      <div>
        {Array(3)
          .fill()
          .map((_, index) => (
            <div className="loading-card" key={index}>
              <Skeleton height={150} width={200} />
              <Skeleton height={20} width={100} />
            </div>
          ))}
      </div>
    </>
  );
};
