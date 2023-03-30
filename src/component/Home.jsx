import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

/* Import Pages */
import Employees from "./Employees";

function Home() {
  let history = useNavigate();

  const handleEdit = (id, name, age) => {
    localStorage.setItem('id', id)
    localStorage.setItem('name', name)
    localStorage.setItem('age', age)
  }

  const handleDelete = (id) => {
    var index = Employees.map((e) => {
      return e.id;
    }).indexOf(id);

    Employees.splice(index, 1);
    history("/");
  };

  return (
    <>
      <div style={{ margin: "10rem" }}>
        <Table style={{ width: "100vh" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0
              ? Employees.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>
                        <Link to={"/edit"}>
                          <Button onClick={() => handleEdit(item.id, item.name, item.age)}>
                            Edit
                          </Button>
                        </Link>
                        &nbsp;
                        <Button onClick={() => handleDelete(item.id)}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })
              : "No Data available"}
          </tbody>
        </Table>
        <br />
        <Link className="d-grid gap-2" to={'/create'}>
            <Button size="lg">Create</Button>
        </Link>
      </div>
    </>
  );
}

export default Home;
