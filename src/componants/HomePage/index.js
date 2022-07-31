import { useState } from "react";
import "./style.scss";
import { v4 as uuidv4 } from "uuid";

function Home() {
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");

  const generateRoomId = () => {
    const id = uuidv4();
    setRoomId(id);
  };

  return (
    <div className="home-page">
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
          <button className="homepage-btn" type="submit">Join</button>
          <button className="homepage-btn" onClick={generateRoomId}>
            Create Room
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
