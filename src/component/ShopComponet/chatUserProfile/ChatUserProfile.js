import React, { useEffect, useState } from "react";

function ChatUserProfile({ currentFrd }) {
  const [CurrnetFrd, setCurrnetFrd] = useState(null);
  useEffect(() => {}, []);
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img className="chatOnlineImg" src={currentFrd?.image} alt="" />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">{currentFrd.name}</span>
      </div>
    </div>
  );
}

export default ChatUserProfile;
