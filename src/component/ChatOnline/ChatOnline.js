import axios from "../../axios";
import React, { useEffect, useState } from "react";
import "./ChatOnline.css";

function ChatOnline({ currentFrd }) {
  const [CurrnetFrd, setCurrnetFrd] = useState(null);
  const CurrentFriend = () => {
    // axios.post('/getCurrentFriend')
  };
  useEffect(() => {}, []);
  return (
    <div className="chatOnline">
      <div>
        <div>
          <img className="chatOnlineImg" src={currentFrd?.image} alt="" />
        </div>
        <div className="chatOnlineName">
          <h3>{currentFrd?.shopName}</h3>
        </div>
      </div>

      {/* <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <div className="chatOnlineBadge"></div>
        </div>
        <div></div>
      </div> */}
    </div>
  );
}

export default ChatOnline;
