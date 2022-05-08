import axios from "../../axios";
import React, { useEffect, useState } from "react";
import "./ChatOnline.css";
import { VideoCallOutlined } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import ShopVideo from "../VideoCallComponent/ShopVideo";

function ChatOnline({ CF, currentFrd, users }) {
  const [CurrnetFrd, setCurrnetFrd] = useState(null);
  const [videoCallOn, setVideoCallOn] = useState(false);
  const CurrentFriend = () => {
    // axios.post('/getCurrentFriend')
  };
  const navigate = useNavigate();
  useEffect(() => {}, []);
  return (
    <>
      {/* <div
            onClick={() => {
              CF();
            }}
          >
            <VideoCallOutlined style={{ color: "green" }} />
          </div> */}

      <div>
        {videoCallOn ? (
          <ShopVideo />
        ) : (
          <div className="chatOnline">
            <div>
              <div>
                <img className="chatOnlineImg" src={currentFrd?.image} alt="" />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <div
                  onClick={() => {
                    setVideoCallOn(true);
                  }}
                >
                  <VideoCallOutlined style={{ color: "green" }} />
                </div>
              </div>
              <div className="chatOnlineName">
                <h3
                  onClick={() => {
                    alert(JSON.stringify(currentFrd._id));
                    alert(JSON.stringify(users));
                  }}
                >
                  {currentFrd?.shopName}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ChatOnline;
