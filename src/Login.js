import React, { useEffect, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import { connect, useDispatch, useSelector } from "react-redux";

/** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
import { loginStyle } from "./loginStyle";
import { inputChange, loginPage } from "./store/action";
import { useNavigate } from "react-router-dom";

function Login() {
  // const [login, setlogin] = useState({
  //   email: "",
  //   password: "",
  // });
  const [formError, setFormError] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  let navigate = useNavigate();
  // history.push('/Dashboard')

  // const data = useSelector((state) => {
  //   return state;
  // });
  const email = useSelector((state) => state.reducer.email);
  console.log(email);
  const password = useSelector((state) => state.reducer.password);
  console.log(password);
  const dispatch = useDispatch();

  const loggedInUser = useSelector((state) => state.reducer.loggedInUser);
  console.log(loggedInUser);

  function handleChange(e) {
    const { name, value } = e.target;
    dispatch(inputChange(name, value));
    // const action = {
    //   type: "INPUT_CHANGE",
    //   payload: {
    //     fieldName: name,
    //     value,
    //   },
    // };
    // dispatch(action);
  }

  // const handlechange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;

  //   console.log(name, value);
  //   setlogin({ ...login, [name]: value });
  //   // dispatch(update(setlogin));
  // };

  const handlesubmit = (e) => {
    e.preventDefault();
    setFormError(validate(email, password));
    // setIsSubmit(true);
    console.log(validate(email, password));
    console.log(
      localStorage.getItem("email") === email &&
        localStorage.getItem("password") === password
    );

    if (
      localStorage.getItem("email") === email &&
      localStorage.getItem("password") === password
    ) {
      dispatch(loginPage());
      alert("sucess!!");
      navigate("/Dashboard");
    } else {
      alert("wrong");
    }

    // dispatch(loginPage(props.email, props.password));

    // setlogin({ email: "", password: "" });
  };
  useEffect(() => {
    console.log(localStorage.getItem("email"));
    // if (Object.keys(formError).length === 0 && isSubmit) {
    //   console.log(email);
    //   console.log(password);
    // }
  }, [formError]);

  const validate = (values) => {
    const errors = {};

    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    if (!validateEmail(email)) {
      errors.email = "email is not valid";
    }

    if (!values.password) {
      errors.password = "password is required";
    }
    return errors;
  };

  return (
    <>
      <div css={loginStyle}>
        <Grid id="container">
          <Grid.Column className="grid" mobile={16} tablet={8} computer={4}>
            <h2>Login</h2>

            <Form className="form" onSubmit={handlesubmit}>
              <Form.Field className=".field">
                <label className="label">Email</label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="email"
                  // value={login.email}
                  value={email}
                  // required
                  onChange={handleChange}
                />
              </Form.Field>
              <p>{formError.email}</p>
              <Form.Field className="field">
                <label className="label">Password</label>
                <input
                  className="input"
                  type="password"
                  name="password"
                  placeholder="password"
                  // value={login.password}
                  value={password}
                  // required
                  onChange={handleChange}
                />
              </Form.Field>
              <p>{formError.password}</p>

              <Button type="submit" className="btn">
                Submit
              </Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    </>
  );
}

export default connect()(Login);
