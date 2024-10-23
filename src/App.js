import { useState } from "react";
import "./App.css";
import SearchBar from "./component/SearchBar";

function App() {
  const [movies, setMovies] = useState([]);

  async function searchMovies(query) {
    const apiKey = process.env.REACT_APP_TMDB_API_KEY; // Your API key should be stored here
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
  }
  return (
    <div className="app">
      <header>
        <h1>Movie Search</h1>
      </header>
      <main>
        <section>
          {/* passing the placeholder and Onsearch as a prop */}
          <SearchBar
            placeholder="Search for your Favourite Movies.."
            onSearch={searchMovies}
          />
          {movies.length > 0 && (
            <div>
              {movies.map((movie) => (
                <div key={movie.id}>
                  <h3>{movie.title}</h3>
                  <p>{movie.overview}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
