import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Getdata() {
  let [emp, setemp] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/employees")
      .then((res) => {
        console.log(res);
        setemp(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="Getdata">
      <h1>EMPLOYEE DATA</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Emp No</th>
            <th>Name</th>
            <th>Job</th>
            <th>Manager</th>
            <th>Hire Date</th>
            <th>Salary</th>
            <th>Dept No</th>
          </tr>
        </thead>
        <tbody>
          {emp &&
            emp.map((value) => (
              <tr key={value.empno}>
                <td>{value.empno}</td>
                <td>{value.ename}</td>
                <td>{value.job}</td>
                <td>{value.mgr}</td>
                <td>{value.hiredate}</td>
                <td>{value.sal}</td>
                <td>{value.deptno}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
