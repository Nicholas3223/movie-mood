import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'

import {isLoadedCheck} from './movieSlice';

import type {RootState} from '../../app/store';

const Movies = () => {
  const {pageLoaded} = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(isLoadedCheck());
  }, []);

  return(
    <div>Home page loaded: {String(pageLoaded)}</div>
  )
}

export default Movies;