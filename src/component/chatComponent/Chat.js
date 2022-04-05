import React from "react";
import "./Chat.css";
import { format } from "timeago.js";

function Chat({ message, own, currentFrd }) {
  return (
    <div className={own ? "messages own" : "messages"}>
      <div className="messageTop">
        <p className="messageText">{message?.text}</p>
      </div>
      <div className="messageBottom">
        {" "}
        <span>{format(message?.createdAt)}</span>
      </div>
    </div>
  );
}

export default Chat;
