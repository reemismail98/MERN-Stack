import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Chat = () => {
const [socket] = useState(() => io(':8000'));

useEffect(() => {
console.log('Is this running?');
socket.on('welcome', data => console.log(data));
}, []);

return (
    <div className="App">
    <h1>Socket Test</h1>
    </div>
);
} 


export default Chat
