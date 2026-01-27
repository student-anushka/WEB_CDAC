import React from "react";
import axios from "axios";

export default class Showrec extends React.Component {
  constructor() {
    super();
    console.log(this);
    //declare state variable
    //let[apidata,setapi] = useState([]);
    this.state = {
      apidata: [],
    };
  }

  //useEffect (() => {}, [])
  componentDidMount() {
    console.log("call api");
    axios.get("http://localhost:5000/api/employees").then((res) => {
      console.log(res);
      console.log(res.data);
      //to update state variable in class component
      this.setState({
        apidata: res.data,
      });
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Show api</h1>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>No</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {this.state.apidata &&
              this.state.apidata.map((value) => (
                <tr>
                  <td>{value.deptno}</td>
                  <td>{value.dname}</td>
                  <td>{value.loc}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}
