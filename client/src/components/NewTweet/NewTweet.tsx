import React, { useState, useEffect } from "react";

const NewTweet = () => {
  const [tweet, setTweet] = useState("");
  const [circleAmount, setCircleAmount] = useState(0)

  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "1.5rem"
    e.target.style.height = e.target.scrollHeight + "px"
    setTweet(e.target.value);
  }


  return (
    <section id="newTweet" className="newTweet">
      <label htmlFor="tweet" className="newTweet__label">
        img <br />
        text
      </label>
      <form action="" method="post" className="newTweet__form">
        <select>
          <option value="everyone">Everyone</option>
          <option value="circle">
            Twitter Circle
            <p>
              {circleAmount} <button type="button">Edit</button>
            </p>
          </option>
        </select>
        <textarea onChange={handleText} name="twee" className="newTweet__input object" placeholder="Whats's happening?" value={tweet} />
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

    </section>
  )
}

export default NewTweet;