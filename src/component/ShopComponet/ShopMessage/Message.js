import React, { useContext, useEffect, useRef, useState } from "react";
import Chat from "../../chatComponent/Chat";
import ChatOnline from "../../ChatOnline/ChatOnline";
import Conversations from "../../conversations/Conversations";

import AuthContext from "../../../store/AuthContextProvider";
import axios from "../../../axios";

import { io } from "socket.io-client";
import ShopContext from "../../../store/ShopContextProvider";
import ChatUserProfile from "../chatUserProfile/ChatUserProfile";
import ConverSationList from "../shopConverSationList/ConverSationList";
import AnswerCallModal from "../../modal/AnswerCallModal";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";

function Message() {
  const [conversations, setconversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState();
  const [newMessage, setNewMessage] = useState("");
  const [arraivalMessage, setarraivalMessage] = useState(null);
  const [currentFrd, setCurrentFrd] = useState(null);
  const [openCallModal, setOpenCallModal] = useState(false);
  const [modelHeader, setModelHeader] = useState();
  const [frdsList, setfrdsList] = useState(true);
  const socket = useRef();
  //   const { shopData } = useContext(AuthContext);
  const { shopData } = useContext(ShopContext);
  console.log(shopData, "this is user logingign");
  const scrollRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setarraivalMessage({
        text: data.text,
        sender: data.senderId,
        createAt: Date.now(),
      });
    });

    socket.current.on("g", (data, userId) => {
      alert(" getVideoCall");
      console.log({ data });
      setModelHeader(data.text);
      setTimeout(() => {
        setOpenCallModal(true);
      }, 2000);
      console.log("video callled.......");
    });
  }, []);

  const childF = () => {
    const receiverId = currentChat.members.find(
      (member) => member !== shopData?.aud
    );
    let s = "sanoop";
    var CALLIING = s;

    socket.current.emit("VideoCall", {
      senderId: shopData?.aud,
      receiverId,
      text: `${CALLIING} wants to make a Video call `,
    });
  };

  const AcceptCall = () => {
    alert("accepted call");
    const callerId = currentChat.members.find(
      (member) => member !== shopData?.aud
    );

    const vendorId = currentChat.members.find(
      (member) => member === shopData?.aud
    );

    alert(JSON.stringify(callerId));
    alert(JSON.stringify(vendorId));

    console.log({ callerId, vendorId });

    socket.current.emit("CallAccepted", {
      callerId: callerId,
      vendorId,
    });

    setTimeout(() => {
      navigate("/UserVideoCall");
    }, 2000);
  };

  useEffect(() => {
    arraivalMessage &&
      currentChat?.members.includes(arraivalMessage.sender) &&
      setMessages((prev) => [...prev, arraivalMessage]);
  }, [arraivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", shopData?.aud);
    socket.current.on("getUsers", (users) => {
      console.log(users);
    });
  }, [shopData]);

  const getConversation = async () => {
    try {
      const result = await axios.get("/conversation/" + shopData?.aud);
      console.log(result, "result");
      if (!result.data) alert("No conver sations");
      setconversations(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  // getting current frd
  const getCurrentFrd = async (frdId) => {
    setCurrentFrd(frdId);
    try {
      const frdResult = await axios.get("/shop/getCurrentFrd?frdId=" + frdId);
      console.log(frdResult.data, "findFrd");
      setCurrentFrd(frdResult.data);
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
    const message = {
      sender: shopData?.aud,
      text: newMessage,
      conversationId: currentChat._id,
    };
    const receiverId = currentChat.members.find(
      (member) => member !== shopData?.aud
    );
    socket.current.emit("sendMessage", {
      senderId: shopData?.aud,
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
  }, [shopData?.aud]);

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
                        con.members.find((id) => id !== shopData?.aud)
                      );
                      setCurrentChat(con);
                      setfrdsList(false);
                    }}
                  >
                    <ConverSationList
                      conversations={con}
                      currentUser={shopData}
                    />
                  </div>
                ))}
              </div>

              {openCallModal && (
                <AnswerCallModal
                  modelHeader={modelHeader}
                  AcceptCall={AcceptCall}
                />
              )}
            </div>
          </div>
        ) : null}

        <div className="userChatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
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
                    <h3>{currentFrd?.name}</h3>
                  </div>
                  <div className="chatbox_topbarRight">
                    <FiMoreHorizontal
                      // onClick={handleNavigate}
                      title="view profile"
                      style={{ fontSize: "30px" }}
                    />
                  </div>
                </div>

                <div className="chatBoxTop">
                  {messages.map((chat) => (
                    <div ref={scrollRef}>
                      <Chat
                        currentFrd={currentFrd}
                        message={chat}
                        own={chat.sender === shopData?.aud}
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
                  {/* <textarea
                    className="chatMessageInput"
                    placeholder="Write Something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea> */}
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
        {/* {currentFrd ? (
          <div className="userChatOnline">
            <div className="chatOnlineWrapper">
              <ChatUserProfile childF={childF} currentFrd={currentFrd} />
            </div>
          </div>
        ) : (
          <p>open with a what</p>
        )} */}
      </div>
    </>
  );
}

export default Message;
