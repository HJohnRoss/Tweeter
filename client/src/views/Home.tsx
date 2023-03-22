import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import NewTweet from "../components/NewTweet/NewTweet";

const Home = () => {
  const [category, setCategory] = useState("following");
  return (
    <>
      <section className="home" id="home">
          <h2 className="home__header">Home</h2>
          <div className="home__nav">
            <button onClick={() => setCategory("for you")} className={category === "for you" ? "home__btn home__btn-active" : "home__btn"}>For you</button>
            <button onClick={() => setCategory("following")} className={category === "following" ? "home__btn home__btn-active" : "home__btn"}>Following</button>
          </div>
          <NewTweet/>
      </section>
      <Sidebar />
    </>
  )
}

export default Home