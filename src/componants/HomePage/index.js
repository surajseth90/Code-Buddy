import { useState } from "react";
import "./style.scss";
import { v4 as uuidv4 } from "uuid";
import { Snackbar, IconButton } from "@mui/material";

function Home() {
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");
  const [snackbarState, setSnackbarState] = useState(false);
  const [snackbarMsg, setSnackbarStateMsg] = useState("");

  const generateRoomId = () => {
    const id = uuidv4();
    setRoomId(id);
  };

  const joinClickHandler = (e) => {
    if (roomId === "" && userName === "") {
      setSnackbarStateMsg("Please enter a valid room ID and user name");
      setTimeout(() => {
        setSnackbarState(true);
      }, 100);
    } else if (roomId === "" && userName !== "") {
      setSnackbarStateMsg("Please enter a valid room ID");
      setTimeout(() => {
        setSnackbarState(true);
      }, 100);
    } else if (roomId !== "" && userName === "") {
      setSnackbarStateMsg("Please enter a valid user name");
      setTimeout(() => {
        setSnackbarState(true);
      }, 100);
    } else {
      console.log("joinClickHandler", e);
    }
  };

  return (
    <div className="home-page">
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={snackbarState}
        autoHideDuration={2000}
        onClose={() => {
          setSnackbarState(false);
        }}
        message={<span id="message-id">{snackbarMsg}</span>}
        action={[
          <IconButton
            key="close"
            arial-label="Close"
            color="inherit"
            onClick={() => {
              setSnackbarState(false);
            }}
          >
            ×
          </IconButton>,
        ]}
      />
      <div className="home-page-container">
        <input
          className="room-id"
          value={roomId}
          onChange={(e) => {
            setRoomId(e.target.value);
          }}
          placeholder="Enter an id to join"
          required
        />
        <input
          className="user-name"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="Enter your name"
          required
        />
        <div className="homepage-btn-container">
          <button
            className="homepage-btn"
            type="submit"
            onClick={(e) => {
              joinClickHandler(e);
            }}
          >
            Join
          </button>
          <button className="homepage-btn" onClick={generateRoomId}>
            Create Room
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
