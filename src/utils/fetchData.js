export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c0e5d9ac33msh14e61e1731ba0d7p1eeb57jsn12fc868628a0",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c0e5d9ac33msh14e61e1731ba0d7p1eeb57jsn12fc868628a0",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
