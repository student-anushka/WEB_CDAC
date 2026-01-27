import React,{useRef} from "react";
// useRef - starting with use - known as Hooks 
import axios, {HttpStatusCode} from 'axios';

export default function Login() {
    var x1 = useRef();
    var x2 = useRef();

    function myfunc() {
        console.log(x1.current.value);
        console.log(x2.current.value);

        axios.post("https://fakestoreapi.com/auth/login", {username: x1.current.value, password: x2.current.value})

        .then(res=> console.log(res))
        .catch(err=> console.log(err))
    }
  return (
    <div class="login">
      <h1>Login Page</h1>
      <input ref={x1} type="text" placeholder="username" />
      <br />
      <input ref={x2} type="text" placeholder="password" />
      <br />
      <button onClick={myfunc}>Login</button>
    </div>
  )
}
