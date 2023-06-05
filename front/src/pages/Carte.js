import React, { useState, useRef, useEffect } from "react";
import CardItemCarte from "../components/card_item_carte";
import { Row, Col, Button, Modal } from "react-bootstrap";
import WebcamPicture from "../components/webcam";
import FilterInput from "../components/filter_input";
import Data from "../data/data.json";

function Carte() {
  const [listTitle, setListTitle] = useState([]);
  const [display, setDisplay] = useState("d-none");
  const [opacity, setOpacity] = useState("opacity-100");
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState(
    "https://www.socialkitchen.fr/photos/logo-thefork.jpg"
  );
  const [indexSelection, setIndexSelection] = useState(-1);
  const [show, setShow] = useState(false);
  const [modalWidth, setModalWidth] = useState();

  const modalRef = useRef(null);

  const filterSetTitle = (e) => {
    setListTitle(e);
  };

  //set the modal width
  const modalDimension = () => {
    if (modalRef.current) {
      setModalWidth(modalRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    setListTitle(Data.data);
  }, []);

  //set the modal width when its set
  useEffect(() => {
    if (modalRef.current) {
      modalDimension();
    }
  });

  //change modal webcam size when there is an event resize on the window
  useEffect(() => {
    window.addEventListener("resize", modalDimension);
    return () => {
      window.removeEventListener("resize", modalDimension);
    };
  }, []);

  //Modals appearance
  const cardFormAppearance = () => {
    setIndexSelection(-1);

    setOpacity("opacity-25");
    setDisplay("d-block");
  };

  //Get data element from the list to display it on modal when an item is selected
  const modifyAnItem = (index) => {
    setIndexSelection(index);
    setImgUrl(listTitle[index]["image"]);
    setTitle(listTitle[index]["title"]);
    setOpacity("opacity-25");
    setDisplay("d-block");
  };

  const newItemCreation = (image, title) => {
    setOpacity("opacity-100");
    setDisplay("d-none");
    //if its a new item create a new one :
    if (indexSelection < 0) {
      setListTitle([...listTitle, { image: image, title: title }]);
    } else {
      //else modify the item that has been selected
      const newList = listTitle.map((value, index) => {
        if (indexSelection === index) {
          value.image = image;
          value.title = title;
          return value;
        } else {
          return value;
        }
      });
      setListTitle(newList);
    }

    // after modification reset the state to initial values
    setTitle("");
    setImgUrl("https://www.socialkitchen.fr/photos/logo-thefork.jpg");
    setIndexSelection(-1);
  };

  //set Image from webcam to the modal
  const setImageFromWebcam = (image) => {
    setImgUrl(image);
  };

  const changeTitle = (input) => {
    setTitle(input);
  };

  //Function to close the modal/form with the cross up right
  const closeForm = () => {
    setOpacity("opacity-100");
    setDisplay("d-none");
    setTitle("");
    setImgUrl("https://www.socialkitchen.fr/photos/logo-thefork.jpg");
    setIndexSelection(-1);
  };

  //Function to delete an items with the cross up right
  const deleteAnItem = (index) => {
    listTitle.splice(index, 1);
    setListTitle([...listTitle]);
  };

  const imgClick = (show) => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <>
      <div className="position-relative">
        <div
          className={`position-absolute ${display} w-100 h-100`}
          style={{ zIndex: 2 }}
          onClick={() => newItemCreation(imgUrl, title)}
        ></div>

        <div
          className={`position-absolute top-50 start-50 translate-middle ${display}`}
          style={{ zIndex: 3 }}
        >
          <CardItemCarte
            image={imgUrl}
            title={title}
            data="data"
            buttonType="Enregistrer"
            buttonClickEvent={() => newItemCreation(imgUrl, title)}
            buttonChangeEvent={changeTitle}
            cardType="form"
            crossClickEvent={closeForm}
            imgClick={() => imgClick(show)}
          />
        </div>
        <div className={`  ${opacity} `}>
          <div className="d-flex  justify-content-between m-auto p-3">
            <div className="d-flex justify-content-center ">
              <Button
                onClick={() => {
                  cardFormAppearance();
                }}
              >
                Ajouter à la carte
              </Button>
            </div>
            <div>
              <FilterInput
                listElement={listTitle}
                filterSetTitle={filterSetTitle}
              />
            </div>
          </div>
          <Row xs={1} sm={2} md={4} className="g-3 p-3">
            {listTitle.map((value, index) => (
              <Col key={index}>
                <CardItemCarte
                  key={index}
                  image={value.image}
                  title={value.title}
                  data="data"
                  buttonType="Modifier"
                  cardType="card"
                  buttonClickEvent={() => modifyAnItem(index)}
                  crossClickEvent={() => {
                    deleteAnItem(index);
                  }}
                />
              </Col>
            ))}
          </Row>
        </div>
        <Modal
          show={show}
          className="position-absolute top-50 start-50 translate-middle"
        >
          <div ref={modalRef}>
            <WebcamPicture
              width={modalWidth}
              setShow={() => imgClick(show)}
              setImageFromWebcam={setImageFromWebcam}
              title={title}
            />
          </div>
        </Modal>
      </div>
    </>
  );
}

export default Carte;
