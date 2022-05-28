import React, { useEffect, useState } from "react";
//import { Form, FormGroup, Input, Label, Col, Button } from "reactstrap";
import { Select, MenuItem } from "@mui/material";
// import Select from "react-select";

const FunctionBasedForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [chosenOption, setChosenOption] = useState({ id: null, name: "" });
  const [responseCleanArray, setResponseCleanArray] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      //console.log(data);

      const users = data.map((item) => ({
        id: item.id,
        name: item.name,
      }));

      setResponseCleanArray(users);
    };

    getData();
  }, []);

  console.log(responseCleanArray);

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
    console.log(chosenOption);
  };

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
        value={chosenOption}
        onChange={(event) => setChosenOption(event.target.value)}
      >
        {responseCleanArray.map((item) => (
          <MenuItem key={item.id} value={item}>
            {item.name}
          </MenuItem>
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
