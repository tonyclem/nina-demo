import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import styled from "styled-components";

const LoginPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <h2>Welcome</h2>
        <p>Please login or sign up to continue shopping</p>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <button type="submit">Submit</button>
          <span>
            Don't have an account? <Link to="/register">Sign up</Link>{" "}
          </span>
          <button>
            {" "}
            <span>
              <AiOutlineGoogle />
            </span>{" "}
            Continue with Google{" "}
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgb(236, 236, 268);

  .container {
    padding: 1rem 3rem;
    padding-bottom: 2rem;
    border-radius: 0.5rem;
    border-top: var(--clr-primary-5) solid 0.5rem;
    background: #fff;

    h2 {
      margin: 1rem 0;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    form div {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
    }

    input {
      padding: 0.5rem;
      border-radius: 0.3rem;
      border: 1px solid gray;
      font-size: 1.1rem;
    }

    button {
      background-color: var(--clr-primary-5);
      color: #fff;
      border: none;
      padding: 0.5rem;
      height: 2.5rem;
      text-transform: uppercase;
      cursor: pointer;
      border-radius: 0.3rem;

      span {
        margin-right: 0.5rem;
        font-size: 1.1rem;
        align-items: center;
      }
    }

    span a {
      text-decoration: none;
      color: var(--clr-primary-5);
    }
  }
`;

export default LoginPage;
