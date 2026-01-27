import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Popular() {
  let [data, setdata] = useState([]);
  useEffect(() => {
    let Api_key = `f6866ecb64af726c47ad422d7b08e283`;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1`
      )
      .then((res) => {
        console.log(res.data);
        console.log(res.data.results);
        setdata(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div class="popular">
      <h1>Popular Movies</h1>
      <hr />
      <div class="row">
        {data &&
          data.map((value) => (
            <div class="col-3 p-3 text-center">
              <img
                src={"https://image.tmdb.org/t/p/w500" + value.poster_path}
                class="img-fluid rounded-3"
              />
              <p>
                <Link to={"/singlemovie/" + value.id}>{value.title}</Link>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
