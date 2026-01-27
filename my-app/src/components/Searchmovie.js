import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Searchmovie() {
  let [data, setdata] = useState([]);
  const movierecord = useSelector((state) => state.search.moviename);

  useEffect(() => {
    console.log("fetch movie", movierecord);
    if (movierecord != "") {
      let Api_key = `f6866ecb64af726c47ad422d7b08e283`;
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${movierecord}&page=1`
        )
        .then((res) => {
          console.log(res.data);
          setdata(res.data.results);
        });
    }
  }, [movierecord]);
  return (
    <div className="container">
      <h1>Search Results for : {movierecord}</h1>
      <hr />
      <div className="row">
        {data &&
          data.map((value) => (
            <div className="col-3 p-3 text-center">
              <img
                src={"https://image.tmdb.org/t/p/w500" + value.poster_path}
                className="img-fluid rounded-3"
              />
              <p>{value.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
