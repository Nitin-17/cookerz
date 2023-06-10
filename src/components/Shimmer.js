import React from "react";
//import "../shimmer.css";
import "../../index.css";

/* const Shimmer = () => {
  return (
    <div className="container">
      <div className="grid">
        <div className="shimmer"></div>
        <div className="shimmer"></div>
        <div className="shimmer"></div>
        <div className="shimmer"></div>
        <div className="shimmer"></div>
        <div className="shimmer"></div>
        <div className="shimmer"></div>
        <div className="shimmer"></div>
        <div className="shimmer"></div>
      </div>
    </div>
  );
}; */

const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div className="shimmer-card" key={index}></div>
        ))}
    </div>
  );
};

export default Shimmer;
