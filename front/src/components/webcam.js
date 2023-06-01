import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import { Button } from "react-bootstrap";

const WebcamPicture = ({ width, setImageFromWebcam, title, setShow }) => {
  const [picture, setPicture] = useState("");
  const webcamRef = useRef(null);

  const videoConstraints = {
    width: width,
    facingMode: "user",
  };

  //function to set the picture
  const capture = () => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);
  };

  return (
    <div>
      <div>
        {picture === "" ? (
          <Webcam
            className="rounded-top"
            width={videoConstraints.width}
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={picture} alt="camera" />
        )}
      </div>
      <div>
        {picture !== "" ? (
          <div className="d-flex justify-content-between p-1">
            <Button
              onClick={(e) => {
                e.preventDefault();
                setPicture("");
              }}
              className="btn btn-danger"
            >
              Ré-essayer
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                setImageFromWebcam(picture);
                setShow();
              }}
              className="btn btn-primary"
            >
              Enregistrer
            </Button>
          </div>
        ) : (
          <div className="d-flex justify-content-between p-1">
            <Button
              onClick={(e) => {
                e.preventDefault();
                setShow();
              }}
              className="btn btn-danger"
            >
              Annuler
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                capture();
              }}
              className="btn btn-primary"
            >
              Capturer
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default WebcamPicture;
