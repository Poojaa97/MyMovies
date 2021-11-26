import React from "react";
import "./MovieDescription.css";
import { useLocation, Link } from "react-router-dom";

const MovieDescription = () => {
  const location = useLocation();
  console.log(location.state);
  const movie = location.state.movie;
  return (
    <div className="moviesD">
      <div className="bgcolor">
        <div className="basicContainer">
          <div className="basicDiv">
            <h3>MY MOVIE</h3>
            <Link to={"/movies"}>
              <i className="fa fa-caret-left customCaret"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="carDiv">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src={`${movie.carImg1}`}
                alt="First slide"
                height="300px"
              />
            </div>

            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={`${movie.carImg2}`}
                alt="Second slide"
                height="300px"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className="desc">
        <h3>{movie.name}</h3>
        <h6>
          {movie.year} / {movie.genre} / {movie.time}
        </h6>
        <p>{movie.description}</p>
        <div className="buttonDiv">
          <button className="ui button customButton">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDescription;
