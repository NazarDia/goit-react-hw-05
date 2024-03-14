import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTM3ZWU2NTg5N2MzYzg3ZDkxMDAzOTlkNDJlMmFkZCIsInN1YiI6IjY1ZjFmMjkxOTkyNTljMDE4NjVlZDVkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F3HwEK2zCs64zkN2rr6p7BAq9-RiwNtsyAINYYTMxDY";

export const trendingMovie = async () => {
  const response = await axios.get("/trending/movie/day");
  return response.data.results;
};

export const searchMovie = async (query, page) => {
  const response = await axios.get(`/search/movie?query=${query}&page=${page}`);
  return response.data;
};

export const getMovieById = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`);
  return response.data;
};

export const getImagePath = async () => {
  const response = await axios.get("/configuration");
  return response.data.images;
};

export const getCredits = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits`);

  return response.data.cast;
};

export const getReviews = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};
