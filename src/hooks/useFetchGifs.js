import { useState, useEffect } from "react";
import { getGifs } from "../services";

export default (category) => {
  const [state, setState] = useState({
    gifs: [],
    loading: true,
  });
  useEffect(() => {
    getGifs(category).then((gifs) => {
      setState({ gifs, loading: false });
    });
  }, [category]);
  return state;
};
