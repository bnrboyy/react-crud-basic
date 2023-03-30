import React, { useState, useEffect } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";

function Edit() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");
  let history = useNavigate();

  
  var index = Employees.map((e) => {
    return e.id;
  }).indexOf(id);

  const handleUpdate = (e) => {
    e.preventDefault();
    let emp = Employees[index]
    emp.name = name;
    emp.age = age;

    if (name == "" || age == "") {
      return false;
    }

    history("/");
  };

  useEffect(() => {
    setName(localStorage.getItem('name'))
    setAge(localStorage.getItem('age'))
    setId(localStorage.getItem('id'))
  }, [])

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control
            type="text"
            placeholder="Enter Age"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          ></Form.Control>
          <Button onClick={(e) => handleUpdate(e)} type="submit">
            Update
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Edit;
