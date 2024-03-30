import { MoviesByTypeEnum } from "../types/movie";

// api/movies.ts
const AUTH_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTkxODMzMjZlMDg0NzBmZTJiNmQyMTAyZTljODhmNSIsInN1YiI6IjY2MDc5MTBkZTYyNzE5MDE3YzBjY2Y3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MlScWLnQ8RDw6T-OL6EnpXbqB9uoaKe1uSqD8XuHjVQ';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${AUTH_KEY}`
  }
};


export const getMoviesByType = async (type: MoviesByTypeEnum) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=1`, options
  );
  const data = await response.json();
  return data;
};


// const options = {method: 'GET', headers: {accept: 'application/json'}};

// fetch('https://api.themoviedb.org/3/movie/changes?page=1', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));