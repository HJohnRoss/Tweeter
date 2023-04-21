import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import NewTweet from "../components/NewTweet/NewTweet";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";

const Home = () => {
  const [category, setCategory] = useState("following");
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  return (
    <>
      <section className="home" id="home">
        <h2 className="home__header">Home</h2>
        <div className="home__nav">
          <button onClick={() => setCategory("for you")} className={category === "for you" ? "home__btn home__btn-active" : "home__btn"}>For you</button>
          <button onClick={() => setCategory("following")} className={category === "following" ? "home__btn home__btn-active" : "home__btn"}>Following</button>
        </div>
        <NewTweet />
        <div>
          <button className="login"
            onClick={() => {
              setOpenLogin(true)
            }}> Login</button>
          {openLogin && <Login setOpenLogin={setOpenLogin} />}
          <button className="signup" onClick={() => { setOpenSignUp(true) }}>Sign up</button>
          {openSignUp && <SignUp setOpenSignUp={setOpenSignUp} />}
        </div>
      </section>
      <Sidebar />

    </>
  )
}

export default Home