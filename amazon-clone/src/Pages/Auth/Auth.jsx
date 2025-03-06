import React from "react";
import classes from "./SignUp.module.css";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <section className={classes.login}>
      {/* logo */}
      <Link>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Amazon_2024.svg/1200px-Amazon_2024.svg.png"
          alt=""
        />
      </Link>
      {/* form */}
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        <div>
          <form action="">
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <button className={classes.login_signInButton}>Sign In</button>
          </form>
          {/* agreement */}
          <p>By signing-in you agree the AMAZON FAKE CLONE conditions of Use and Sale. Please see our privacy notice, our cookies notice and our Interest-Based Ads notice</p>

          {/* create account btn */}
          <button className={classes.login_registerButton}>Create Your Amazon Account</button>
        </div>
      </div>
    </section>
  );
};

export default Auth;
