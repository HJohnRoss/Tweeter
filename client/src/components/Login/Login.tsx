import React from "react";
// import {Link} from "react-router-dom";

type Props = {
  setOpenLogin: (val: boolean) => void;
}

const Login = (props:Props) => {
    return (
        <div>
            <div className="logo-box">
            <div className="exit-button">
                <button className="exit" onClick={() => props.setOpenLogin(false)}>X</button>
            </div>
                <img src="./logo.png" alt="twitter" className="logo" />
                <h2 className="bold-text">Sign In to Twitter</h2>
                <button>
                    <img src="./google.png" alt="google" />
                    Sign in with Google
                </button>
                <button className="bold-text">
                    <img src="./apple.png" alt="apple" />
                    Sign in with Apple
                </button>
                <hr></hr>
                <span>or</span>
                <form>
                    <input type="text" placeholder="Phone email or username" />
                    <button className="bold-text">Next</button>
                </form>
                <button>Forget Password</button>
                <p>
                    Don't have an account? <a href="#" className="sign-up">{`Sign up`}</a>
                </p>
            </div>
        </div>
    );
}

export default Login