const apikey = "a2f5d2786bd82d041f006bbc44ec6e17";

const endpoints = {
  getAvengers: "https://gateway.marvel.com:443/v1/public/characters"
};

export const getAvengers = () => {
  return fetch(`${endpoints.getAvengers}?apikey=${apikey}`)
    .then((response) => response.json())
    .then((avengers) => avengers.data.results);
};

export const getAvengerDetail = (id) => {
  return fetch(`${endpoints.getAvengers}/${id}?apikey=${apikey}`)
    .then((response) => response.json())
    .then((avengers) => avengers.data.results);
};
