import { VideoCallOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import ShopVideo from "../../VideoCallComponent/ShopVideo";

function ChatUserProfile({ currentFrd, childF }) {
  const [CurrnetFrd, setCurrnetFrd] = useState(null);
  const [videoCallOn, setVideoCallOn] = useState(false);

  useEffect(() => {}, []);
  return (
    <>
      {videoCallOn ? (
        <ShopVideo />
      ) : (
        <div className="chatOnline">
          <div className="chatOnlineFriend">
            <div className="chatOnlineImgContainer">
              <img className="chatOnlineImg" src={currentFrd?.image} alt="" />
              <div
                onClick={() => {
                  setVideoCallOn(true);
                }}
              >
                <VideoCallOutlined style={{ color: "green" }} />
              </div>
              <div className="chatOnlineBadge"></div>
            </div>
            <span onClick={childF} className="chatOnlineName">
              {currentFrd.name}
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatUserProfile;
