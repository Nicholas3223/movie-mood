import {createSlice} from '@reduxjs/toolkit';

export interface Movies {
  pageLoaded: boolean,
}

const initialState: Movies = {
  pageLoaded: false,
}

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    isLoadedCheck: (state) => {
      state.pageLoaded = true;
    }
  }
})

export const {isLoadedCheck} = moviesSlice.actions;

export default moviesSlice.reducer;