import React from "react";
//node_modules folder
import ReactDOM from "react-dom/client";
//node_modules folder
import App from "./components/App";
import "./style.css";
import projectroute from "./projectroute";

console.log(React);
console.log(ReactDOM);

const app = ReactDOM.createRoot(document.getElementById("root"));
// var userName = 'user1';
// var userAge = 20;

// app.render(
//   // React Fragmentation - empty tags <> </>
//   // React can render only one element (parent element) - <> </> OR <div> </div>
//   <>
//     <h1>{userName}</h1>
//     <h2>{userAge}</h2>
//   </>
// );

// function Product() {
//     return (
//         <div>
//             <h2>2000</h2>
//             <p>Shirt</p>
//             <button>Add To Cart</button>
//         </div>
//     )
// }

// app.render(
//   <>
//     <Product />
//     <Product />
//     <Product />
//     <Product />
//   </>
// );

app.render(projectroute);
