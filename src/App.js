import React, { useState } from "react";
import "./styles.css";

var emojiDictonary = {
  "😇": "Smiling Face with Halo",
  "😋": "Face Savoring Food",
  "😂": "Face with Tears of Joy",
  "🤣": "Rolling on the Floor Laughing",
  "🤪": "Zany",
  "😒": "Unamused",
  "🤑": "Money Mouth Face",
  "🙄": "Face with Rolling Eyes",
  "🥳": "Partying",
  "❤️": "Love",
  "🥺": "Pleading",
  "🤓": "Nerd",
  "😪": "Sleepy",
  "🥴": "Woozy",
  "😞": "Disappointing",
  "😫": "Tired",
  "🥱": "Yawning",
  "😢": "Crying",
  "😨": "Fearful",
  "😰": "Anxious"
};

var emojis = Object.keys(emojiDictonary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    // console.log(event.target.value);
    var userInput = event.target.value;
    var meaning = emojiDictonary[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this in our dictonary!";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictonary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 className="navigation">know your emoticons...!</h1>

      <input onChange={emojiInputHandler} placeholder="Search for an emoji" />
      {/* <div className="txt"> */}
      <h3 className="txt"> {meaning} </h3>
      {/* </div> */}

      <h3 className="emoji">our emoji dictonary</h3>
      {emojis.map(function (emoji) {
        return (
          <span key={emoji} onClick={() => emojiClickHandler(emoji)}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
