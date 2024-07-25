import React from "react";
import { MdArrowOutward } from "react-icons/md";
import "./card.css";

const Card = ({ img, title, navlink }) => {
  return (
    <div className="card-container">
      <img src={img} className="card-image" alt={title} />
      <div className="card-text">
        <h1 className="card-title">{title}</h1>
        <div className="card-nav">
          <a href={navlink}>
            <MdArrowOutward style={{ color: "black", fontSize: "20px" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
