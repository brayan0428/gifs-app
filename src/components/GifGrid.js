import React from "react";
import { GifItemGrid } from "./GifItemGrid";
import useFetchGifs from "../hooks/useFetchGifs";
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {
  const { gifs, loading } = useFetchGifs(category);
  return (
    <>
      <h2>{category}</h2>
      {loading && <h4>Loading...</h4>}
      <div className="GifGrid">
        {gifs.map((gif) => (
          <GifItemGrid key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
