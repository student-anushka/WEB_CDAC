// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";

// export default function Singlemovie() {
//   let [movie, setmovie] = useState();
//   let [cast, setcast] = useState();

//   let urldata = useParams();
//   console.log(urldata); // {movieid:303938}

//   useEffect(() => {
//     let Api_key = `f6866ecb64af726c47ad422d7b08e283`;

//     axios
//       .get(
//         `https://api.themoviedb.org/3/movie/${urldata.movieid}?api_key=${Api_key}&language=en-US`
//       )
//       .then((res) => {
//         setmovie(res.data);
//       })
//        .catch((err) => {
//         console.log(err);
//       });

//     axios
//       .get(
//         `https://api.themoviedb.org/3/movie/${urldata.movieid}/credits?api_key=${Api_key}&language=en-US`
//       )
//       .then((res) => {
//         setcast(res.data.cast);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [urldata.movieid]);

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Singlemovie() {
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  const { movieid } = useParams();
  const Api_key = "f6866ecb64af726c47ad422d7b08e283";

  useEffect(() => {
    // 1️⃣ Fetch Movie Details
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieid}?api_key=${Api_key}&language=en-US`
      )
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => console.log(err));

    // 2️⃣ Fetch Cast Details
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=${Api_key}&language=en-US`
      )
      .then((res) => {
        setCast(res.data.cast);
      })
      .catch((err) => console.log(err));
  }, [movieid]);

  if (!movie) return <h2 className="text-center mt-5">Loading...</h2>;

  return (
    <div className="container my-5">
      {/* Movie Details Section */}
      <div className="row mb-5">
        <div className="col-md-4">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className="img-fluid rounded-3 shadow"
            alt={movie.title}
          />
        </div>

        <div className="col-md-8">
          <h1>{movie.title}</h1>
          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Rating:</strong> ⭐ {movie.vote_average}
          </p>
          <p>
            <strong>Overview:</strong> {movie.overview}
          </p>

          <h5 className="mt-4">
            <strong>Genres:</strong>
          </h5>
          {movie.genres?.map((g) => (
            <span key={g.id} className="badge bg-primary me-2 p-2">
              {g.name}
            </span>
          ))}
        </div>
      </div>

      <hr />

      {/* Cast Section */}
      <h2 className="mb-3">Cast</h2>
      <div className="row">
        {cast.slice(0, 12).map((actor) => (
          <div className="col-6 col-md-3 text-center mb-4" key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : "https://via.placeholder.com/200x300?text=No+Image"
              }
              className="img-fluid rounded-3 mb-2 shadow"
              style={{ height: "250px", objectFit: "cover" }}
              alt={actor.name}
            />
            <h6 className="fw-bold">{actor.name}</h6>
            <p className="text-muted small">{actor.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
