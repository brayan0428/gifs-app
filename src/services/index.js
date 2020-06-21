export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?limit=12&api_key=TaIigXIQdN8kSXyAgNSgwC5lqAloVnM6&q=${category}`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    img: gif.images.downsized_medium.url,
  }));
  return gifs;
};
