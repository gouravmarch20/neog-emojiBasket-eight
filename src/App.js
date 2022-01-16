import React, { useState } from "react";
import './App.css';

var emojiDictionary = {
  "😊": "Happy Face",
  "😂": "Laughing Tears",
  "🔥": "Fire",
  "💯": "Hundered points",
  "🎉": "Party Time",
  "✔️": "Check Mark",
  "😍": "Heart Eyes",
  "🙏": "Namaste",
  "🤳": "Selfie",
  "🩸": "Blood Donation",
  "😭": "Crying",
  "✨": "Sparkles",
  "👍": "Like",
  "🎈": "Balloon",
  "🥰": "In Love Face",
  "❤️": "Red heart",
  "🎁": "Wrapped gift",
  "😅": "grinning face with sweat",
  "🎅": "Santa Claus",
  "🏆": "Trophy",
  "🏅": "Sports Medal",
  "👨‍💻": "Technologist",
  "💻": "Laptop",
};

var emojiKey = Object.keys(emojiDictionary)// return each key in array
const App = () => {
  const [meaning, setMeaning] = useState("Output will be shown here...");

  const emojiInputHandler = (e) => {
    let userInput = e.target.value;
    if (userInput !== "") {
      let meaning = emojiDictionary[userInput];
      if (meaning === undefined) {
        meaning = "We don't have this in our database.";

      }
      setMeaning(meaning);

    } else {
      setMeaning("Output will be shown here...");
    }
  }


  function emojiClickHandler(emoji) {
    let meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }


  return (
    <>
      <div className="app">
        <header className="hero">
          <h1 className="hero-heading">Emoji Basket</h1>
        </header>

        <section className="section"></section>
        <div className="container container-center section-center">
          <input
            placeholder="Enter emoji or click on any emoji below"
            onChange={emojiInputHandler}
          />

          <div class="outputDiv">
            <p>Name of this emoji</p>
            <div id="output-div">{meaning}</div>
          </div>
        </div>
      </div>
      {/* displing key of database  */}
      <div class="container-ul">

        <ul className="list-non-bullet">
          {emojiKey.map((emoji) => {
            return (
              <li
                className="list-item-inline"
                onClick={() => emojiClickHandler(emoji)}
                key={emoji}
              >
                {emoji}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="footer">
        <p>
          Developed by{" "}
          <a
            href="https://trixoon.com/index.html"
            target="_blank"
            rel="noreferrer"
          >
            Gourav
          </a>
        </p>
        <ul className="social-links list-non-bullet">
          <li className="list-item-inline">
            <a
              target="_blank"
              class="link"
              href="https://github.com/gouravmarch20"
              rel="noreferrer"
            >
              <i class="fab fa-github fa-1x"></i>
            </a>
          </li>
          <li className="list-item-inline">
            <a
              target="_blank"
              className="link"
              href="https://twitter.com/gouravmarch20"
              rel="noreferrer"
            >
              <i class="fab fa-twitter fa-1x"></i>
            </a>
          </li>
          <li className="list-item-inline">
            <a
              target="_blank"
              className="link"
              href="https://www.linkedin.com/in/gouravmarch20/"
              rel="noreferrer"
            >
              <i class="fab fa-linkedin-in fa-1x"></i>
            </a>
          </li>
        </ul>
      </div>

    </>
  )
}

export default App
