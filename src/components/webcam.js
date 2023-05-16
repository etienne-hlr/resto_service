import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import { Card, Button, Form, CloseButton } from "react-bootstrap";

// const WebcamComponent = () => <Webcam />;

const WebcamPicture = ({ width }) => {
  const [picture, setPicture] = useState("");
  const webcamRef = useRef(null);

  const videoConstraints = {
    width: width,
    facingMode: "user",
  };

  const capture = () => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);
  };

  return (
    <div>
      <div>
        {picture == "" ? (
          <Webcam
            className="rounded-top"
            width={videoConstraints.width}
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={picture} />
        )}
      </div>
      <div>
        {picture != "" ? (
          <Button
            onClick={(e) => {
              e.preventDefault();
              setPicture("");
            }}
            className="btn btn-primary"
          >
            Ré-essayer
          </Button>
        ) : (
          <Button
            onClick={(e) => {
              e.preventDefault();
              capture();
            }}
            className="btn btn-danger"
          >
            Capturer
          </Button>
        )}
      </div>
    </div>
  );
};
export default WebcamPicture;
