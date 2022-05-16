import React, { useState } from "react";
import { useDispatch } from "react-redux";
/** @jsxImportSource @emotion/react */
import { Button, Form } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import { loginStyle } from "./loginStyle";
import { register } from "./store/action";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [Register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setRegister({ ...Register, [name]: value });
  };

  return (
    <div css={loginStyle}>
      <Grid id="container">
        <Grid.Column className="grid" mobile={16} tablet={8} computer={4}>
          <h2>REGISTER</h2>

          <Form className="form">
            <Form.Field className=".field">
              <label className="label">name</label>
              <input
                className="input"
                type="name"
                name="name"
                placeholder="name"
                value={Register.name}
                required
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field className=".field">
              <label className="label">Email</label>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="email"
                value={Register.email}
                required
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field className="field">
              <label className="label">Password</label>
              <input
                className="input"
                type="password"
                name="password"
                placeholder="password"
                value={Register.password}
                required
                onChange={handleChange}
              />
            </Form.Field>

            <Button
              type="submit"
              className="btn"
              onClick={() => {
                localStorage.setItem("email", Register.email);
                localStorage.setItem("password", Register.password);
                dispatch(register(Register));
                navigate("/login");
              }}
            >
              Submit
            </Button>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  );
};
export default Register;
