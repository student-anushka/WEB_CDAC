import React, { useEffect, useState } from "react";

export default function Counter(props) {
  // state variable , dispatcher fucntion
  let [username, setuser] = useState("user1");
  let [userage, setuserage] = useState(20);
  let [userdegree, setdegree] = useState(["BE", "ME"]);

  function myfunc() {
    props.p1 = 9000;
  }

  function myfunc1() {
    setuser("user2");
    setuserage(userage + 10);
    setdegree(["ssc", "bsc"]);
  }

//   // useEffect hook will be called on mounting and changes in a state variable
//   useEffect(() => {
//     console.log("useEffect called", Math.random());
//   });


//   //useEffect will be called only once
//   useEffect(() => {
//     console.log("useEffect called", Math.random());
//   }, []); // conditional rendering


//   // useEffect hook will be called on mounting and changes in a name variable
//   useEffect(() => {
//     console.log("useEffect called", Math.random());
//   }, [username]);


//   useEffect(() => {
//     console.log("useEffect called", Math.random());
//   }, [userage]);


  useEffect(() => {
    console.log("useEffect called", Math.random());

    return () => {
      console.log("left");
    };
  }, []);

  
  return (
    <div class="container">
      <h1>State Variable, useEffect Hook</h1>
      <p>
        PROPS : {props.p1} {props.p2}
      </p>
      <p>
        State variable : {username} {userage}
      </p>
      <ul>
        <li>{userdegree[0]}</li>
        <li>{userdegree[1]}</li>
      </ul>
      <button onClick={myfunc}>Change</button>
      <button onClick={myfunc1}>Change1</button>
    </div>
  );
}
