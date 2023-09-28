import { createSlice } from '@reduxjs/toolkit';

const middlewareActions = {
  performFetchMovies: () => {},
  performSearchMovies: () => {},
};

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    data: [],
  },
  reducers: {
    setMovies: (state, action) => {
      state.data = [...action.payload];
    },
    ...middlewareActions,
  },
});

export const { setMovies, performFetchMovies, performSearchMovies } =
  movieSlice.actions;
export default movieSlice.reducer;
