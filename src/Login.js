import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import "./Login.css";

function Login() {
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setlogin({ ...login, [name]: value });
  };
  //  const dispatch=useDispatch();
  // const handlesubmit=(e)=>{
  //   e.preventDefault();
  //   dispatch(login({
  //     email:login.email,
  //     password:login.password,
  //   })
  //   )

  // }

  return (
    <>
      <div className="login">
        <Grid className="container">
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <h2>Login</h2>

            <Form className="login_form">
              <Form.Field>
                <label>Email</label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="email"
                  value={login.email}
                  onChange={handlechange}
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={login.password}
                  onChange={handlechange}
                />
              </Form.Field>

              <Button className="btn" type="submit">
                Submit
              </Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    </>
  );
}

export default Login;
