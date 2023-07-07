import React, { useState } from 'react';
import { useEffect } from 'react';

import './App.css';
import searchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=45690e2c';

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  // const movie = {
  //   "Title": "Superman",
  //   "Year": "1978",
  //   "Rated": "PG",
  //   "Released": "15 Dec 1978",
  //   "Runtime": "143 min",
  //   "Genre": "Action, Adventure, Sci-Fi",
  //   "Director": "Richard Donner",
  //   "Writer": "Jerry Siegel, Joe Shuster, Mario Puzo",
  //   "Actors": "Christopher Reeve, Margot Kidder, Gene Hackman",
  //   "Plot": "Just before the destruction of the planet Krypton, scientist Jor-El sends his infant son Kal-El on a spaceship to Earth. Raised by kindly farmers Jonathan and Martha Kent, young Clark discovers the source of his superhuman powers and moves to Metropolis to fight evil. As Superman, he battles the villainous Lex Luthor, while, as novice reporter Clark Kent, he attempts to woo co-worker Lois Lane",
  //   "Language": "English",
  //   "Country": "United States, United Kingdom, Canada",
  //   "Awards": "Nominated for 3 Oscars. 17 wins & 23 nominations total",
  //   "Poster": "https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
  //   "Ratings": [
  //     {
  //       "Source": "Internet Movie Database",
  //       "Value": "7.4/10"
  //     },
  //     {
  //       "Source": "Rotten Tomatoes",
  //       "Value": "94%"
  //     },
  //     {
  //       "Source": "Metacritic",
  //       "Value": "82/100"
  //     }
  //   ],
  //   "Metascore": "82",
  //   "imdbRating": "7.4",
  //   "imdbVotes": "181,656",
  //   "imdbID": "tt0078346",
  //   "Type": "movie",
  //   "DVD": "01 May 2001",
  //   "BoxOffice": "$134,478,449",
  //   "Production": "N/A",
  //   "Website": "N/A",
  //   "Response": "True"
  // }


  useEffect(() => {
    searchMovies('Iron Man')
  }, []);

  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => (setSearchTerm(e.target.value))}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0
        ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} props={movie} />
            ))}
          </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }
    </div>
  );
}

export default App;
