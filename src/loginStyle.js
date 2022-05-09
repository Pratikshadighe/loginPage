import { css } from "@emotion/react";
export const loginStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
  font-family: sans-serif;

  #container {
    width: 30%;
    height: 60%;
    display: flex;
    justify-content: center;
    
     
    box-shadow: 5px 10px 18px gray;

     .grid{
        h2{
      font-size: 32px;
      margin-bottom: 15px;
      padding-bottom: 10px;
      letter-spacing: -1px;
      margin-left: 30%;
    }

    .form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      
      .field {
        // margin-left: 10%;
      
        .label {
          margin: 0px;
        }
        .input {
          min-width: 200px;
          padding: 10px;
          padding-left: 10px;
          margin-bottom: 15px;
          
           outline: none;
          border: 1px solid rgba(0, 0, 0, 0.24);
          font-family: sans-serif;
          border-radius: 2px;
          font-size: 15px;
        }
      }
        .btn {
          justify-content: center;
          width: 50%;
          margin-bottom: 50%;
          margin-left: 30%;
          margin-top:10px;
          border:none;
          font-weight:bold;
          padding:10px;
          background-color: rgba(0, 0, 0, 0.15);
          border-radius: 10px;
          cursor: pointer;
          &: hover {
            background-color: rgba(0, 0, 0, 0.24);
          }
        }
      
      }
    }
  }
}
`;
