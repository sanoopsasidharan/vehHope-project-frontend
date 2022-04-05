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

function Message() {
  const [conversations, setconversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState();
  const [newMessage, setNewMessage] = useState("");
  const [arraivalMessage, setarraivalMessage] = useState(null);
  const [currentFrd, setCurrentFrd] = useState(null);
  const socket = useRef();
  //   const { shopData } = useContext(AuthContext);
  const { shopData } = useContext(ShopContext);
  console.log(shopData, "this is user logingign");
  const scrollRef = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setarraivalMessage({
        text: data.text,
        sender: data.senderId,
        createAt: Date.now(),
      });
    });
  }, []);

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
    alert(frdId);
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
        <div className="userChatMenu">
          <div className="chatMenuWrapper">
            <input
              type="text"
              placeholder="search for friends"
              name=""
              className="chatMenuInput"
              id=""
            />
            {conversations?.map((con) => (
              <div
                onClick={() => {
                  getCurrentFrd(con.members.find((id) => id !== shopData?.aud));
                  setCurrentChat(con);
                }}
              >
                <ConverSationList conversations={con} currentUser={shopData} />
                {/* <Conversations conversations={con} currentUser={shopData} /> */}
              </div>
            ))}
          </div>
        </div>
        <div className="userChatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
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
                  <textarea
                    className="chatMessageInput"
                    placeholder="Write Something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button onClick={handleSubmit} className="chatSubmitButton">
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat
              </span>
            )}
          </div>
        </div>
        {currentFrd ? (
          <div className="userChatOnline">
            <div className="chatOnlineWrapper">
              <ChatUserProfile currentFrd={currentFrd} />
            </div>
          </div>
        ) : (
          <p>open with a what</p>
        )}
      </div>
    </>
  );
}

export default Message;
