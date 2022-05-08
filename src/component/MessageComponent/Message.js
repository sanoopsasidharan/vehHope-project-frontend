import React, { useContext, useEffect, useRef, useState } from "react";
import Chat from "../chatComponent/Chat";
import ChatOnline from "../ChatOnline/ChatOnline";
import Conversations from "../conversations/Conversations";
import "./Message.css";
import AuthContext from "../../store/AuthContextProvider";
import axios from "../../axios";
import { io } from "socket.io-client";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../store/GlobalContextProvider";

function Message() {
  const [conversations, setconversations] = useState([]);
  const [frdsList, setfrdsList] = useState(true);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState();
  const [newMessage, setNewMessage] = useState("");
  const [arraivalMessage, setarraivalMessage] = useState(null);
  const [currentFrd, setCurrentFrd] = useState(null);
  const socket = useRef();
  const [socketUsers, setsocketUsers] = useState();
  const [modelHeader, setModelHeader] = useState();
  const { userDetails } = useContext(AuthContext);
  console.log(userDetails, "this is user logingign");
  const scrollRef = useRef();

  const navigate = useNavigate();

  const { shopId, settingShopId } = useContext(GlobalContext);
  const handleNavigate = async () => {
    await settingShopId(currentFrd._id);
    navigate("/shopDetails");
  };

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("welcome", (msg) => {
      alert(" welcome");
      console.log({ msg });
    });
    socket.current.on("getMessage", (data) => {
      console.log({ data });
      setarraivalMessage({
        text: data.text,
        sender: data.senderId,
        createAt: Date.now(),
      });
    });

    socket.current.on("g", (data, userId) => {
      alert(" getVideoCall");

      alert(JSON.stringify(data));
      console.log({ data });

      // setModelHeader(data.text);

      setTimeout(() => {
        alert("on opne remort modal is open");
      }, 2000);

      // console.log({ modelHeader });

      console.log("video callled.......");
    });

    socket.current.on("CallAccepted", () => {
      alert("sanoop");
      setTimeout(() => {
        navigate("/UserVideoCall");
      }, 2000);
    });
  }, []);

  const childF = () => {
    const receiverId = currentChat.members.find(
      (member) => member !== userDetails.aud
    );
    var CALLIING = userDetails.userNme;
    console.log(userDetails);
    socket.current.emit("VideoCall", {
      senderId: userDetails.aud,
      receiverId,
      text: `${CALLIING} wants to make a Video call `,
    });
  };

  useEffect(() => {
    arraivalMessage &&
      currentChat?.members.includes(arraivalMessage.sender) &&
      setMessages((prev) => [...prev, arraivalMessage]);
  }, [arraivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", userDetails?.aud);
    socket.current.on("getUsers", (users) => {
      console.log(users);
      setsocketUsers(users);
    });
  }, [userDetails]);

  const getConversation = async () => {
    try {
      const result = await axios.get("/conversation/" + userDetails?.aud);
      console.log(result, "result");
      if (!result.data) alert("No conver sations");
      setconversations(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  // getting current frd
  const getCurrentFrd = async (shopId) => {
    setCurrentFrd(shopId);
    try {
      const shopResult = await axios.get("/getCurrentshop?shopId=" + shopId);
      console.log(shopResult.data, "shopResutl");
      setCurrentFrd(shopResult.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getMessage = async () => {
    try {
      const response = await axios.get("/message/" + currentChat?._id);
      if (response.data) setMessages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage === "") return;
    const message = {
      sender: userDetails.aud,
      text: newMessage,
      conversationId: currentChat._id,
    };
    const receiverId = currentChat.members.find(
      (member) => member !== userDetails.aud
    );
    socket.current.emit("sendMessage", {
      senderId: userDetails.aud,
      receiverId,
      text: newMessage,
    });
    try {
      const response = await axios.post("/message", message);
      setMessages([...messages, response.data]);
      setNewMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getConversation();
  }, [userDetails.aud]);

  useEffect(() => {
    getMessage();
  }, [currentChat]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  console.log(messages);

  return (
    <>
      <div className="usermessager">
        {frdsList ? (
          <div className="userChatMenu">
            <div className="chatMenuWrapper">
              <input
                type="text"
                placeholder="search for friends"
                name=""
                className="chatMenuInput"
                id=""
              />
              <div className="conversationlist">
                {conversations?.map((con) => (
                  <div
                    onClick={() => {
                      getCurrentFrd(
                        con.members.find((id) => id !== userDetails?.aud)
                      );
                      setfrdsList(false);
                      setCurrentChat(con);
                    }}
                  >
                    <Conversations
                      conversations={con}
                      currentUser={userDetails}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        <div className="userChatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                {currentFrd ? (
                  <div className="chatbox_mainTopbar">
                    <div className="chatbox_topbarLeft">
                      <div>
                        <MdArrowBackIosNew
                          onClick={() => {
                            setfrdsList(true);
                            setCurrentChat(null);
                          }}
                          title="back"
                          style={{ fontSize: "20px", marginLeft: "10px" }}
                        />
                      </div>
                      <img
                        className="chatbox_currentFrdImg"
                        src={currentFrd?.image}
                        alt=""
                      />
                      <h3>{currentFrd?.shopName}</h3>
                    </div>
                    <div className="chatbox_topbarRight">
                      <FiMoreHorizontal
                        onClick={handleNavigate}
                        title="view profile"
                        style={{ fontSize: "30px" }}
                      />
                    </div>
                  </div>
                ) : (
                  <p></p>
                )}
                <div className="chatBoxTop">
                  {messages.map((chat) => (
                    <div ref={scrollRef}>
                      <Chat
                        currentFrd={currentFrd}
                        message={chat}
                        own={chat.sender === userDetails.aud}
                      />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <input
                    className="chatMessageInput"
                    placeholder="Write Something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  />
                  <button onClick={handleSubmit} className="chatSubmitButton">
                    Send
                  </button>
                </div>
              </>
            ) : (
              <div className="noConverSationMainDiv">
                <span className="noConversationText">
                  Open a conversation to start a chat
                </span>
              </div>
            )}
          </div>
        </div>
        {/* <div className="userChatOnline">
          <div className="chatOnlineWrapper">
            {currentFrd ? (
              <ChatOnline
                currentFrd={currentFrd}
                CF={childF}
                users={socketUsers}
              />
            ) : (
              <p></p>
            )}
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Message;
