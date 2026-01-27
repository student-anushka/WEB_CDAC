// rcc - shortcut for class component

import axios from "axios";
import React from "react";

export default class Addrecord extends React.Component {
  constructor() {
    super();
    this.x1 = React.createRef();
    this.x2 = React.createRef();
    this.x3 = React.createRef();
  }

  myfunc() {
    axios
      .post("http://localhost:5000/api/employees", {
        deptno: this.x1.current.value,
        dname: this.x2.current.value,
        loc: this.x3.current.value,
      })
      .then((res) => {
        console.log("success");
        console.log(res);
      });
  }

  render() {
    return (
      <div className="container">
        <h1>Add Into api</h1>
        <input ref={this.x1} placeholder="No" type="text" /> <br />
        <input ref={this.x2} placeholder="Name" type="text" /> <br />
        <input ref={this.x3} placeholder="Location" type="text" /> <br />
        <button
          onClick={() => {
            this.myfunc();
          }}
        >
          Add Dept
        </button>
      </div>
    );
  }
}
