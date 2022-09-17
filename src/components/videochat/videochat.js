import React, { useState, useCallback } from 'react';
import Lobby from './lobby';
import Room from './room'

const VideoChat = () => {
  const [username, setUsername] = useState('');
  const [roomName, setRoomName] = useState('');
  const [token, setToken] = useState(null);

  const handleUsernameChange = useCallback(event => {
    setUsername(event.target.value);
  }, []);

  const handleRoomNameChange = useCallback(event => {
    setRoomName(event.target.value);
  }, []);

  const handleSubmit = useCallback(async event => {
    event.preventDefault();
    const data = await fetch('http://localhost:3001/video/token', {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({
        identity: username,
        room: roomName
      }),
      headers: {
        'Content-Type': 'application/json', 
        "Access-Control-Allow-Origin" : "*", 
"Access-Control-Allow-Credentials" : true 
      }
    }).then(res => res.json());
    setToken(data.token);
  }, [username, roomName]);

  const handleLogout = useCallback(event => {
    setToken(null);
  }, []);
  
  let render;
  if (token) {
    render = (
      <Room roomName={roomName} token={token} handleLogout={handleLogout} />
    );
  } else {
    render = (
      <Lobby
         username={username}
         roomName={roomName}
         handleUsernameChange={handleUsernameChange}
         handleRoomNameChange={handleRoomNameChange}
         handleSubmit={handleSubmit}
      />
    );
  }
  return render;
};

export default VideoChat; 