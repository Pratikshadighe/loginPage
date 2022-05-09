import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import { useDispatch } from "react-redux";
// import "./Login.css";
/** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
import { loginStyle } from "./loginStyle";
import { loginPage, update } from "./store/action";
// const Input = css`
//   min-width: 200px;
//   padding: 10px;
//   padding-left: 10px;
//   margin-bottom: 15px;
//   outline: none;
//   border: 1px solid rgba(0, 0, 0, 0.24);
//   font-family: sans-serif;
//   border-radius: 2px;
//   font-size: 15px;
// `;

// const BUTTON = css`
//   justify-content: center;
//   width: 30%;
//   margin-bottom: 10px;
//   margin-left: 30%;

//   padding: 10px;
//   border-radius: 10px;
//   cursor: pointer;
//   &: hover {
//     background-color: rgba(0, 0, 0, 0.24);
//   }
// `;

function Login() {
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value);
    setlogin({ ...login, [name]: value });
    dispatch(update(setlogin));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(loginPage(login));
    setlogin({ email: "", password: "" });
  };

  return (
    <>
      <div
        css={loginStyle}
        // css={css`
        //   display: flex;
        //   flex-direction: column;
        //   justify-content: center;
        //   height: 100vh;
        //   align-items: center;
        //   font-family: sans-serif;
        // `}
      >
        <Grid
          id="container"
          // css={css`
          //   width: 30%;
          //   height: 50%;
          //   display: flex;
          //   justify-content: center;

          //   box-shadow: 5px 10px 18px gray;
          // `}
        >
          <Grid.Column className="grid" mobile={16} tablet={8} computer={4}>
            <h2
            // css={css`
            //   font-size: 32px;
            //   margin-bottom: 15px;
            //   padding-bottom: 10px;
            //   letter-spacing: -1px;
            //   margin-left: 30%;
            // `}
            >
              Login
            </h2>

            <Form
              className="form"
              onSubmit={handlesubmit}
              // css={css`
              //   display: flex;
              //   flex-direction: column;
              //   justify-content: center;
              // `}
            >
              <Form.Field
                className=".field"
                // css={css`
                //   margin-left: 10%;
                // `}
              >
                <label
                  className="label"
                  // css={css`
                  //   margin: 10px;
                  // `}
                >
                  Email
                </label>
                <input
                  // css={Input}
                  className="input"
                  type="email"
                  name="email"
                  placeholder="email"
                  value={login.email}
                  onChange={handlechange}
                />
              </Form.Field>
              <Form.Field
                className="field"
                // css={css`
                //   margin-left: 10%;
                // `}
              >
                <label
                  className="label"
                  // css={css`
                  //   margin: 10px;
                  // `}
                >
                  Password
                </label>
                <input
                  // css={Input}
                  className="input"
                  type="password"
                  name="password"
                  placeholder="password"
                  value={login.password}
                  onChange={handlechange}
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

export default Login;
