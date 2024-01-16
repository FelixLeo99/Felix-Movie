// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react';
import './App.css';
import { getPopularMovies } from './api';

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const movies = await getPopularMovies();
        setPopularMovies(movies);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <div className="App">
      <header className="App-header text-center d-flex flex-column align-items-center">
        <h1 className="text-light text-center">SKUY MOVIE</h1>
        <input placeholder="Cari Film Kesayangan..... " className="Movie-search" />
        <div className="Movie-container">
          {popularMovies.map((movie) => (
            <div key={movie.id} className="card">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={movie.title} />
              <div className="card-body">
                <h5 className="Movie-title">{movie.title}</h5>
                <p className="Movie-date">{movie.release_date}</p>
                <p className="Movie-Rate">{movie.vote_average}/10</p>
                <a href="#" className="btn btn-success">
                  Go somewhere
                </a>
              </div>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
};

export default App;
