import React from "react";
import PropTypes from "prop-types";

export const GifItemGrid = ({ img, title }) => (
  <div className="GifItemCard">
    <img className="GifItemCard__img" src={img} alt={title} />
    <div className="GifItemCard__body">
      <h4>{title}</h4>
    </div>
  </div>
);

GifItemGrid.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
