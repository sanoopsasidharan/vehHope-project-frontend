import React, { useContext, useEffect, useRef, useState } from "react";
import Peer from "simple-peer";
import io from "socket.io-client";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  Link,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { Assessment, Phone } from "@material-ui/icons";
import "./VideoCall.css";
import AuthContext from "../../store/AuthContextProvider";
import ShopContext from "../../store/ShopContextProvider";

const socket = io.connect("http://localhost:5001");

function VideoCall() {
  const [me, setMe] = useState("");
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const [idToCall, setIdToCall] = useState("");
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState("");
  const { userDetails, userlogged } = useContext(AuthContext);
  const { shopData } = useContext(ShopContext);
  const [buttonState, setButtonState] = useState(false);
  const [socketUsers, setsocketUsers] = useState("");

  const myVideo = useRef();
  const userVideo = useRef();

  const connectionRef = useRef();

  useEffect(() => {
    socket.current = io.connect("http://localhost:5001");
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        setStream(stream);
        myVideo.current.srcObject = stream;
      });

    socket.current.on("me", (id) => {
      setMe(id);
      setTimeout(() => {
        if (userDetails.aud) {
          try {
            socket.current.emit("addUsers", userDetails?.aud, id);

            console.log(userDetails?.aud, "userDetails?.auduserDetails?.aud");

            socket.current.on("getUsers", (users) => {
              alert(JSON.stringify(users));
              setsocketUsers(users);

              console.log(users, " user in get users ");

              if (users?.length > 1) {
                const vendorId = users.find(
                  (user) => user.userId !== userDetails.aud
                );

                console.log(vendorId, "Video call vendorId video call");

                setIdToCall(vendorId?.socketId);

                console.log(users, shopData.aud, userDetails.aud, vendorId);

                setTimeout(callUser(idToCall), 2000);
              }
            });
          } catch (error) {
            alert("video call is  catch ");
            console.log(error);
          }
        } else {
          console.log({ id });
          alert("video call is elsess ");
          socket.current.emit("addUsers", shopData?.aud, id);

          socket.current.on("getUsers", (users) => {
            setsocketUsers(users);

            console.log({ users });
          });
        }
      }, 3000);
    });

    socket.on("callUser", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setName(data.name);
      setCallerSignal(data.signal);
    });
  }, []);

  const callUser = (id) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });

    peer.on("signal", (data) => {
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
        name: name,
      });
    });

    peer.on("stream", (stream) => {
      userVideo.current.srcObject = stream;
    });

    socket.on("callAccepted", (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });
    connectionRef.current = peer;
  };

  const answerCall = () => {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: caller });
    });

    peer.on("stream", (stream) => {
      userVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy();
    socket.current.emit("callEnded");

    // connectionRef.current.destroy();
    // socket.current.disconnect();
  };

  return (
    <>
      <h1 style={{ textAlign: "center", color: "#fff" }}> zoom</h1>
      <div className="container">
        <div className="video-container">
          <div className="video">
            {stream && (
              <video
                playsInline
                muted
                ref={myVideo}
                autoPlay
                style={{ width: "300px" }}
              />
            )}
          </div>

          <p> {me} this is me</p>
          <p>{userDetails.aud} thiss is ausd</p>
          <div className="video">
            {callAccepted && !callEnded ? (
              <video
                playsInline
                ref={userVideo}
                autoPlay
                style={{ width: "300px" }}
              />
            ) : null}
          </div>
        </div>

        <div className="myId">
          <TextField
            id="filled-basic"
            label="Name"
            variant="filled"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginBottom: "20px" }}
          />
          <CopyToClipboard text={me} style={{ marginBottom: "2rem" }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Assessment fontSize="large" />}
            >
              Copy ID
            </Button>
          </CopyToClipboard>
          <TextField
            id="filled-basic"
            label="ID to call"
            variant="filled"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
          />
          <div className="call-button">
            {callAccepted && !callEnded ? (
              <Button variant="contained" color="secondary" onClick={leaveCall}>
                End Call
              </Button>
            ) : (
              <IconButton
                color="primary"
                aria-label="call"
                onClick={() => callUser(idToCall)}
              >
                <Phone fontSize="large" />
              </IconButton>
            )}
          </div>
        </div>
        <div>
          {receivingCall && !callAccepted ? (
            <div className="caller">
              <h3>{name} is Calling ...</h3>
              <h3>sanoop is calling</h3>
              <Button variant="contained" color="primary" onClick={answerCall}>
                Answer
              </Button>
              <h3>sanoop is calling</h3>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default VideoCall;
