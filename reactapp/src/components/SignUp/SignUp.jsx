import React from "react";
import { useState } from "react";
import CreateAccount from "../CreateAccount/CreateAccount";

const SignUp = (props) => {

  const [createAccount, setCreateAccount] = useState(false)

  return (
    <div className="logo-box">
      <div className="exit-button">
        <button className="exit" onClick={() => props.setOpenSignUp(false)}>X</button>
      </div>
      <img src="./logo.png" alt="twitter" className="logo" />
      <h2 className="bold-text">Join Twitter today</h2>
      <button>
        <img src="./google.png" alt="google" />
        Sign up with Google
      </button>
      <button className="bold-text">
        <img src="./apple.png" alt="apple" />
        Sign up with Apple
      </button>
      <hr></hr>
      <span>or</span>
      <form>
        <button className="bold-text"
          onClick={() => {
            setCreateAccount(true)
          }}>Create account</button>
        {createAccount && <CreateAccount setCreateAccount={setCreateAccount} />}
      </form>
      <p>
        By signing up, you agree to the <a href="#" className="sign-up">{`Terms of Service`} </a>
        and <a href="#" className="sign-up">{`Privacy Policy`}</a>, including <a href="#" className="sign-up">{`Cookie Use.`}</a>
      </p>
      <p>
        Have an account already?<a href="#" className="sign-up">{`Log in`}</a>
      </p>
    </div>

  )
}

export default SignUp
