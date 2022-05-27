import React, { useEffect, useState } from "react";
//import { Form, FormGroup, Input, Label, Col, Button } from "reactstrap";
import { Select, MenuItem } from "@mui/material";
// import Select from "react-select";

const FunctionBasedForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseRawData, setResponseRawData] = useState([]);
  const [responseUserData, setResponseUserData] = useState([]);
  const [age, setAge] = useState("");
  const [chosenOption, setChosenOption] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      //console.log(data);

      const users = data.map((item) => ({
        value: item.id,
        label: item.name,
      }));

      setResponseRawData(data);
      setResponseUserData({ selectOptions: users });
    };

    getData();
  }, []);

  console.log(responseRawData);
  console.log(responseUserData);

  const handleSubmit = (event) => {
    event.preventDefault();

    const completed_form = {
      email: email,
      password: password,
      id: chosenOption.id,
      name: chosenOption.name,
      age: age,
    };

    console.log(completed_form);
  };

  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

  return (
    <form onSubmit={handleSubmit}>
      <h1>Function Based Form</h1>
      <label for="exampleEmail" sm={2}>
        Email
      </label>
      <input
        type="email"
        name="email"
        id="exampleEmail"
        placeholder="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label for="examplePassword" sm={2}>
        Password
      </label>
      <input
        type="password"
        name="password"
        id="examplePassword"
        placeholder="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Select
        onChange={(event) =>
          setChosenOption({ id: event.value, name: event.label })
        }
      >
        {responseRawData.map((item) => (
          <MenuItem value={item.name}>{item.name}</MenuItem>
        ))}
      </Select>
      <label for="exampleAge" sm={2}>
        Age
      </label>
      <input
        type="age"
        name="age"
        id="exampleAge"
        placeholder="30"
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default FunctionBasedForm;
