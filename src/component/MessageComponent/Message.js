import React, { useContext, useEffect, useRef, useState } from "react";
import Chat from "../chatComponent/Chat";
import ChatOnline from "../ChatOnline/ChatOnline";
import Conversations from "../conversations/Conversations";
import "./Message.css";
import AuthContext from "../../store/AuthContextProvider";
import axios from "../../axios";
import { io } from "socket.io-client";

function Message() {
  const [conversations, setconversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState();
  const [newMessage, setNewMessage] = useState("");
  const [arraivalMessage, setarraivalMessage] = useState(null);
  const [currentFrd, setCurrentFrd] = useState(null);
  const socket = useRef();
  const { userDetails } = useContext(AuthContext);
  console.log(userDetails, "this is user logingign");
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
    socket.current.emit("addUser", userDetails?.aud);
    socket.current.on("getUsers", (users) => {
      console.log(users);
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
                        own={chat.sender === userDetails.aud}
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
        <div className="userChatOnline">
          <div className="chatOnlineWrapper">
            {currentFrd ? <ChatOnline currentFrd={currentFrd} /> : <p></p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
