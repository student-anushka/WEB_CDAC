import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-3">
          <Product name="shirt" price="1000" />
        </div>
        <div class="col-3">
          <Product name="jeans" price="2000" />
        </div>
        <div class="col-3">
          <Product name="belt" price="500" />
        </div>
        <div class="col-3">
          <Product name="shoes" price="4000" />
        </div>
      </div>
    </div>
  );
}

export default Home;
