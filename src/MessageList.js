import React from "react";

const messages = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "y",
  "v",
  "w",
  "x",
  "y",
  "z",
  "aa",
  "bb",
];

const MessageList = ({ classes }) => {
  return (
    <React.Fragment>
      {messages.map((message, i) => {
        return (
          <div key={i}>
            <p>{message}</p>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default MessageList
