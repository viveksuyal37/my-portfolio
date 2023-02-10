import React from "react";

const Card = (props) => {
  const { name, desc, url, snapshot } = props.work;

  return (
    <div className="card">
      <img src={snapshot} alt="" className="card_img" />
      <h2 className="card_title">{name}</h2>
      <p className="card_desc">{desc}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="btn card_btn">
        Visit
      </a>
    </div>
  );
};

export default Card;
