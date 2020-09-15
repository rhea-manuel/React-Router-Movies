import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie'
import MovieList from './Movies/MovieList';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { useParams } from "react-router-dom";

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          console.log(response.data)
          setMovieList(response.data)
          // console.log(movieList)
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />


      <div>Replace this Div with your Routes</div>


      <Switch>

        <Route path="/movies/:id">
          <Movie movies={movieList}></Movie>
        </Route>

        <Route path="/">
          <MovieList movies={movieList}></MovieList>
        </Route>



      </Switch>
      {/* <Switch>

      </Switch> */}
      {/* <Switch> */}
      {/* <Route path="/movie/:id"></Route> */}
      {/* <Movie id={0}></Movie> */}
      {/* </Switch> */}

      {/* <Route path="/" ></Route> */}
    </div>
  );
}
