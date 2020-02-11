import React from "react";
import Tilt from "react-tilt";

const SignIn = ({ onRouteChange }) => {
  return (
    <article className="br3 ba bg-white-20 b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <form className="measure " autoComplete="off">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f3 fw6 ph0 mh0">
              <Tilt options={{ max: 50 }}>
                <div className="Tilt-inner pa4">
                  Welcome to SMARTBRAIN AI <br></br>
                  <span className="f3">Face Detection Software</span>
                </div>
              </Tilt>
            </legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-white-40 hover-black w-100"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-white-40 hover-black w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div className="">
            <input
              onClick={() => onRouteChange("home")}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib br1"
              type="submit"
              value="Sign in"
            />
          </div>
          <div className="lh-copy mt3">
            <p
              className="f4 link black db grow pointer"
              onClick={() => onRouteChange("register")}
            >
              Register
            </p>
          </div>
        </form>
      </main>
    </article>
  );
};

export default SignIn;
