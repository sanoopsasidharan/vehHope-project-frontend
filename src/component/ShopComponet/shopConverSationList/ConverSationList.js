import axios from "../../../axios";
import React, { useEffect, useState } from "react";

function ConverSationList({ conversations, currentUser }) {
  const [user, setUser] = useState(null);
  let friendId;
  const findingFriendId = () => {
    friendId = conversations.members.find((m) => m !== currentUser.aud);
  };
  const gerUser = async () => {
    try {
      console.log("get user function is working");
      const result = await axios.get("/user?userId=" + friendId);
      console.log(result.data, "friendId");
      setUser(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    findingFriendId();
    gerUser();
  }, [conversations, currentUser]);
  return (
    <div className="conversations">
      <img src={user?.image} className="conversationImg" alt="" />
      <span className="conversationName">{user?.name}</span>
    </div>
  );
}

export default ConverSationList;
