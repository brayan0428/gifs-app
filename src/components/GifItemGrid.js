import React from "react";

export const GrifItemGrid = ({ img, title }) => (
  <div className="GifItemCard">
    <img className="GifItemCard__img" src={img} alt={title} />
    <div className="GifItemCard__body">
      <h4>{title}</h4>
    </div>
  </div>
);
