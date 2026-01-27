import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviename: "",
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    searchMovie: (state, action) => {
      console.log("search movie action called", action);
      state.moviename = action.payload;
    },
  },
});

export const { searchMovie } = movieSlice.actions;
export default movieSlice.reducer;
