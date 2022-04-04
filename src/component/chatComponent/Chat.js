import React from "react";
import "./Chat.css";
import { format } from "timeago.js";

function Chat({ message, own }) {
  return (
    <div className={own ? "messages own" : "messages"}>
      <div className="messageTop">
        <img
          className="messageImge"
          src="https://images.pexels.com/photos/7614448/pexels-photo-7614448.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
        <p className="messageText">{message?.text}</p>
      </div>
      <div className="messageBottom">{format(message?.createdAt)}</div>
    </div>
  );
}

export default Chat;
