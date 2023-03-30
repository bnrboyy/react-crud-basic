import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const ids = uuid();
    let uniqueId = ids.slice(0, 8);
    let a = name,
      b = age;
    if (a == '' || b == '') {
        return false;
    }
    Employees.push({ id: uniqueId, name: a, age: b });
    history("/");
  };
  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control
            type="text"
            placeholder="Enter Age"
            required
            onChange={(e) => setAge(e.target.value)}
          ></Form.Control>
          <Button onClick={(e) => handleSubmit(e)} type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Add;
