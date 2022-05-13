import React from "react";
import { Button, Form } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import { connect, useDispatch, useSelector } from "react-redux";

/** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
import { loginStyle } from "./loginStyle";
import { inputChange } from "./store/action";

function Login() {
  // const [login, setlogin] = useState({
  //   email: "",
  //   password: "",
  // });

  const data = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

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
    // dispatch(loginPage(props.email, props.password));

    // setlogin({ email: "", password: "" });
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
                  value={data.email}
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
                  // value={login.password}
                  value={data.password}
                  onChange={handleChange}
                />
              </Form.Field>

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
