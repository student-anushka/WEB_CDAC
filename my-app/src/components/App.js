// rfc - shortcut
import React from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { Provider } from "react-redux";
import projectstore from "../redux/projectstore";

export default function App() {
  return (
    <Provider store = {projectstore}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
}
