import React from "react";

const TestAudioMessage = () => {
  const testMessage = {
    senderId: "846716822bd668a7817b91c41b013159",
    receiverId: "846716822bd668a7817b91c41b00f1cd",
    timestamp: "2025-06-30T13:49:20.412Z",
    type: "audio",
    audioUrl: "/uploads/audio-1751291360484-903006540.webm",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Test Audio Message</h3>
      {testMessage.audioUrl && (
      <audio controls>
      <source src="http://localhost:3500/uploads/audio-1751291360484-903006540.webm" type="audio/webm" />
      Your browser does not support the audio element.
    </audio>
    
      )}
      <p>Timestamp: {new Date(testMessage.timestamp).toLocaleString()}</p>
    </div>
  );
};

export default TestAudioMessage;
