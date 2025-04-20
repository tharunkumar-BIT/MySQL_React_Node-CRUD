import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");

  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    axios
      .post("http://localhost:3001/create", {
        name: name,
        age: age,
        country: country,
        position: position,
        salary: salary,
      })
      .then(() => {
        setEmployeeList([...employeeList, {
          name: name,
          age: age,
          country: country,
          position: position,
          salary: salary,
        }]);
      });
  };

  const getEmployees = () => {
    axios.get("http://localhost:3001/employees").then((res)=>{
      setEmployeeList(res.data);
    });
  };

  return (
    <div className="App">
      <div className="info">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          id="age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <label htmlFor="country">Country</label>
        <input
          type="text"
          name="country"
          id="country"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
        <label htmlFor="position">Position</label>
        <input
          type="text"
          name="position"
          id="position"
          onChange={(e) => {
            setPosition(e.target.value);
          }}
        />
        <label htmlFor="salary">Salary(year)</label>
        <input
          type="number"
          name="salary"
          id="salary"
          onChange={(e) => {
            setSalary(e.target.value);
          }}
        />
        <button onClick={addEmployee}>Add employee</button>
      </div>

      <div className="employees">
        <button onClick={getEmployees}>Show Employees</button>

        {employeeList && employeeList.map((val,key) => {
          return(
            <div className="employee" key={key}>
              <p>Name: {val.name}</p>
              <p>Age: {val.age}</p>
              <p>Country: {val.country}</p>
              <p>Position: {val.position}</p>
              <p>Salary: {val.salary}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
