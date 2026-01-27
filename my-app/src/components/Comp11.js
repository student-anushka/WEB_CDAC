import React from "react";
import Comp12 from "./Comp12";
import Comp13 from "./Comp13";

export default function Comp11(props) {
  return (
    <div class="container border border-5 p-5">
      Comp11
      <div class="row">
        <div class="col-3 border border-5 p-4">
          <Comp12 />
        </div>
        <div class="col-9 border border-5 p-4">
          <Comp13 p2={props.p1}/>
        </div>
      </div>
    </div>
  );
}
