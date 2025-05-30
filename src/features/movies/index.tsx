import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'

import {isLoadedCheck} from './movieSlice';

import type {RootState} from '../../app/store';

const getMovies = async(saveFunc: Function) => {
  try {
    const url = 'https://api.themoviedb.org/3/discover/movie';
    const res = await fetch(url);
    if(!res.ok) {
      throw new Error(`Request returned error: ${res.status}`);
    }
    const json = await res.json();
    saveFunc(json);
  } catch(err) {
    console.error(err)
  }
}

const Movies = () => {
  const [movies, setMovies] = useState({});
  const {pageLoaded} = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch();

  const API_KEY = import.meta.env.VITE_TEST_API_KEY;


  useEffect(() => {
    getMovies(setMovies);
    dispatch(isLoadedCheck());
  }, []);

  console.log("!!!movies", movies);

  console.log('apiKey', API_KEY);

  return(
    <div>Home page loaded: {String(pageLoaded)}</div>
  )
}

export default Movies;