import React from "react";
import { Link } from "react-router-dom";
import "./MovieList.css";

import Data from "../json/data.json";

class MovieList extends React.Component {
  state = {
    movies: Data.movies
  };

  list = this.state.movies.map((movie) => {
    return (
      <div class="column">
        <Link to={`/movies/${movie.id}`} state={{ movie: movie }}>
          <div class="ui fluid card">
            <div class="image">
              <img src={`${movie.img}`} alt="movie" />
            </div>
            <div className="content">
              <div class="header">{movie.name}</div>
              <div class="description">
                <p>{movie.lang}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  render() {
    return (
      <div className="movies">
        <div className="bgcolor">
          <div className="basicContainer">
            <div className="basicDiv">
              <h3>MY MOVIE</h3>
              <Link to={"/"}>
                <i className="fa fa-sign-out customCaret"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="ui three column grid">{this.list}</div>
      </div>
    );
  }
}

export default MovieList;
