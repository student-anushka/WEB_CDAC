import React from "react";

export default function Comp22(props) {
  function myfunc(ev) {
    console.log(ev.target.innerText);
    props.p1(ev.target.innerText); // function21() called
  }
  return (
    <div>
      <h1>Categories comp22</h1>
      <ul>
        <li onClick={myfunc}>electronics</li>
        <li onClick={myfunc}>jewelery</li>
        <li onClick={myfunc}>men's clothing</li>
        <li onClick={myfunc}>women's clothing</li>
      </ul>
    </div>
  );
}
