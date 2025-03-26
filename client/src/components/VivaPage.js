import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './VivaPage.css';

const VivaPage = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const videoRef = useRef(null);
  const history = useHistory();
  const { transcript } = useSpeechRecognition();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch(err => console.error('Error accessing media devices.', err));
  }, []);

  useEffect(() => {
    if (isSpeaking) {
      SpeechRecognition.startListening({ continuous: true });
    } else {
      SpeechRecognition.stopListening();
    }
  }, [isSpeaking]);

  const handleStartSpeaking = () => {
    setIsSpeaking(true);
  };

  const handleStopSpeaking = () => {
    setIsSpeaking(false);
  };

  const handleEndSession = () => {
    history.push('/report');
  };

  return (
    <div className="viva-page">
      <div className="webcam-feed">
        <video ref={videoRef} width="600" height="400" autoPlay muted />
      </div>
      <div className="chat-panel">
        <h3>Live Transcript</h3>
        <div className="transcript">
          <p>{transcript}</p>
        </div>
      </div>
      <div className="controls">
        <button onClick={handleStartSpeaking} disabled={isSpeaking}>Start Speaking</button>
        <button onClick={handleStopSpeaking} disabled={!isSpeaking}>Stop Speaking</button>
        <button onClick={handleEndSession}>End Session</button>
      </div>
    </div>
  );
};

export default VivaPage; 