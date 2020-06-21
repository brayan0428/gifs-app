import React from "react";
import { GrifItemGrid } from "./GifItemGrid";
import useFetchGifs from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { gifs, loading } = useFetchGifs(category);
  return (
    <>
      <h2>{category}</h2>
      {loading && <h4>Loading...</h4>}
      <div className="GifGrid">
        {gifs.map((gif) => (
          <GrifItemGrid key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};