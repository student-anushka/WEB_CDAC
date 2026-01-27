import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Getdept() {
  let [emp, setEmp] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/departments")
      .then((res) => {
        console.log(res);
        setEmp(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div class="container">
      <h1>FROM JAVA API</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>No</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {emp &&
            emp.map((value) => 
              <tr>
                <td>{value.deptno}</td>
                <td>{value.dname}</td>
                <td>{value.loc}</td>
              </tr>
            )}
        </tbody>
      </table>
    </div>
  );
}
