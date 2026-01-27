import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { searchMovie } from "../redux/slices/searchSlice";

export default function Header() {
  let x1 = useRef();
  let dispatch = useDispatch();
  let navigate = useNavigate();

  function myfunc(ev) {
    ev.preventDefault(); // won't refresh page
    console.log(x1.current.value); //chk movie name form text
    dispatch(searchMovie(x1.current.value)); // dispatch moviename from header comp to movie slice
    //let redirect to search component
    navigate("/search"); // projectroute.js must have / search route
  }

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/login">
                Login Page
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/newuser">
                Register
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/add-user">
                Adduser
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/show-user">
                Showuser
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/counter">
                State useEffect
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/get-dept">
                GET DEPT
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/get-data">
                GET DATA
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/show-rec">
                Showrec
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active"
                aria-current="page"
                to="/add-record"
              >
                Addrecord
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/comp10">
                Parent-Child
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/comp21">
                State Lift
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/popular">
                Popular
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/toprated">
                Top Rated
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/upcoming">
                Upcoming
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
          <form class="d-flex" role="search" onSubmit={myfunc}>
            <input
              ref={x1}
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
