import { BrowserRouter, Routes, Route } from "react-router";
import App from "./components/App";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Pagenotfound from "./components/Pagenotfound";
import Adduser from "./components/Adduser";
import Showuser from "./components/Showuser";
import Counter from "./components/Counter";
import Getdept from "./components/Getdept";
import Getdata from "./components/Getdata";
import Showrec from "./components/Showrec";
import Addrecord from "./components/Addrecord";
import Comp10 from "./components/Comp10";
import Comp21 from "./components/Comp21";
import Popular from "./components/Popular";
import Upcoming from "./components/Upcoming";
import Toprated from "./components/Toprated";
import Singlemovie from "./components/Singlemovie";
import Searchmovie from "./components/Searchmovie";

//http://localhost:3000/ ==> Home
//http://localhost:3000/login ==> Login
//http://localhost:3000/newuser ==> Register
//http://localhost:3000/sadjgas ==> Pagenotfound
//http://localhost:3000/category/add
//http://localhost:3000/product/10
// <Footer>

let projectroute = (
  <BrowserRouter>
    <Routes>
      <Route path="" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="newuser" element={<Register />} />
        <Route path="*" element={<Pagenotfound />} />
        <Route path="add-user" element={<Adduser />} />
        <Route path="show-user" element={<Showuser />} />
        <Route path="counter" element={<Counter p1="100" p2="200" />} />
        <Route path="get-dept" element={<Getdept />} />
        <Route path="get-data" element={<Getdata />} />
        <Route path="show-rec" element={<Showrec />} />
        <Route path="add-record" element={<Addrecord />} />
        <Route path="comp10" element={<Comp10 />} />
        <Route path="comp21" element={<Comp21 />} />
        <Route path="upcoming" element={<Upcoming />} />
        <Route path="toprated" element={<Toprated />} />
        <Route path="popular" element={<Popular />} />
        <Route path="singlemovie/:movieid" element={<Singlemovie />} />
        <Route path="search" element={<Searchmovie />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default projectroute;
