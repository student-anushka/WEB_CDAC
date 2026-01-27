import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Comp23(props) {
  let [api, setapi] = useState([]);
  useEffect(() => {
    if (props.p2 != "") {
      axios
        .get(`https://fakestoreapi.com/products/category/${props.p2}`)
        .then((res) => {
          console.log(res);
          setapi(res.data);
        });
    }
  }, [props.p2]);

  return (
    <div>
      Comp23, {props.p2}
      <h1r />
      <div className="row">
        {api &&
          api.map((value) => 
            <div className="col-3 text-center">
              <img src={value.image} className="img-fluid" />
              <h2>{value.price}</h2>
              <p>{value.title}</p>
            </div>
          )}
      </div>
    </div>
  )
}
