import React from "react";
import { connect } from "react-redux";

const MovieSearchResult = ({ isLoading, movies }) => {
  return (
    <>
      <h1>Result</h1>
      {isLoading && "Loading..."}
      {movies &&
        movies.map((movie) => {
          return (
            <ul key={movie.imdbID}>
              <li>{movie.Title}</li>
            </ul>
          );
        })}
    </>
  );
};

const stateToProps = (globalState) => {
  return {
    isLoading: globalState.isLoading,
    movies: globalState.movies,
  };
};

export default connect(stateToProps)(MovieSearchResult);
