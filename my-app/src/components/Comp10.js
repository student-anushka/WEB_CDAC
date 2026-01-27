import React, { useRef, useState } from "react";
import Comp11 from "./Comp11";
import contextapi from "../contextapi";

export default function Comp10() {
  let x1 = useRef();
  let [country, setcountry] = useState("");
  function myfunc() {
    console.log(x1.current.value);
    setcountry(x1.current.value); // update state variable using textbox data
  }
  return (
    <div class="container border border-5 p-5">
      <h1>Search Country</h1>
      <input ref={x1} type="text" placeholder="Country Name" />
      <button onClick={myfunc}>Search</button>
      comp10
      <hr />
      <contextapi.Provider value={country}>
        <Comp11 p1={country} />
      </contextapi.Provider>
    </div>
  );
}
