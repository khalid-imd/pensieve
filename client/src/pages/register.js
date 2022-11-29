import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "../App.css";

const Register = () => {
  return (
    <div
      className="bg-black d-flex align-items-center row"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div
        style={{ height: "600px" }}
        className="border border-white col-10 rounded-5 m-auto d-flex align-items-center row"
      >
        <div className="col-3 mx-auto">
          <Form className="text-center">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                className="rounded-pill border-0 text-light bg-dark"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group
              className="mb-3 rounded-pill"
              controlId="formBasicPassword"
            >
              <Form.Control
                className="rounded-pill border-0 text-light bg-dark"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Link className="text-decoration-none text-dark" to="/summary">
              <Button
                variant="danger"
                type="submit"
                className="w-100 border-0 rounded-pill mb-3 fw-bold"
              >
                Register Account
              </Button>
            </Link>
            <Form.Text className="text-muted ">
              Have an account?{" "}
              <Link className="text-decoration-none text-muted" to="/">
                klik here
              </Link>
            </Form.Text>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
