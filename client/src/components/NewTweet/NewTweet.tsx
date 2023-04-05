import React, { useState, useEffect } from "react";

const NewTweet = () => {
  const [tweet, setTweet] = useState("");

  const [audience, setAudience] = useState("Everyone")
  const [showAudience, setShowAudience] = useState(false)

  const [circleAmount, setCircleAmount] = useState(0)

  const [reply, setReply] = useState("Everyone")


  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "1.5rem"
    e.target.style.height = e.target.scrollHeight + "px"
    setTweet(e.target.value);
  }

  const toggleAudience = () => {
    if (showAudience) {
      setShowAudience(false)
    } else {
      setShowAudience(true)
    }
  }


  return (
    <section id="newTweet" className="newTweet">
      <label htmlFor="tweet" className="newTweet__label">
        img <br />
        text
      </label>
      <form action="" method="post" className="newTweet__form">
        <button className="newTweet__form-audience-btn--1" type="button" onClick={toggleAudience}>
          {audience} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
        {
          showAudience ?
            <div className="newTweet__form-audience-container">
              <h4>Choose audience</h4>
              <div className="newTweet__form-audience-container-btn-1" onClick={() => {
                setAudience("Everyone")
                setShowAudience(false)
              }}><h5>Everyone</h5></div>
              <div className="newTweet__form-audience-container-btn-1" onClick={() => {
                setAudience("Twitter Circle")
                setShowAudience(false)
              }}>
                <h5>Twitter Circle</h5>
                {circleAmount} <span>People</span> <button className="newTweet__form-audience-container-btn-2" type="button">
                  <u>Edit</u>
                </button>
              </div>
            </div>
            :
            ""
        }
        <textarea onChange={handleText} name="tweet" className="newTweet__input object" placeholder="Whats's happening?" value={tweet} />
        <div className="newTweet__form-buttons">
          <div className="newTweet__icons">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
          </div>
          <button>Tweet</button>
        </div>
      </form>

    </section >
  )
}

export default NewTweet;