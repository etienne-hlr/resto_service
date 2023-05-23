import React, { useState, useRef, useCallback, useEffect } from "react";
import CardItemCarte from "../components/card_item_carte";
import {
  InputGroup,
  Row,
  Col,
  FormControl,
  Button,
  Modal,
} from "react-bootstrap";
import WebcamPicture from "../components/webcam";

function Carte() {
  const [listTitle, setListTitle] = useState([
    {
      image:
        "https://www.il-posto-restaurant.fr/wp-content/uploads/2017/09/p_1_2_9_129-thickbox_default-Maxi-Coca-15l.jpg",
      title: "Coca",
    },
    {
      image:
        "https://cdn.monoprix.fr/cdn-cgi/image/width=580,quality=80,format=auto,metadata=none/assets/images/grocery/1032781/580x580.jpg",
      title: "Ice tea",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1024px-A_small_cup_of_coffee.JPG",
      title: "Café",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Beer_mug_transparent.png/220px-Beer_mug_transparent.png",
      title: "Bière",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Apple_juice_with_3apples-JD.jpg/1024px-Apple_juice_with_3apples-JD.jpg",
      title: "Jus de pomme",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Brick_tea_4897.jpg/1024px-Brick_tea_4897.jpg",
      title: "Thé",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/88/Glass_of_Red_Wine_with_a_bottle_of_Red_Wine_-_Evan_Swigart.jpg",
      title: "Vin",
    },
    {
      image:
        "https://www.lesrhumsdumonde.com/675-large_default/rhum-don-papa-baroko.jpg",
      title: "Rhum",
    },
  ]);
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

  const modalDimension = () => {
    if (modalRef.current) {
      setModalWidth(modalRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    if (modalRef.current) {
      setModalWidth(modalRef.current.offsetWidth);
    }
    window.addEventListener("resize", modalDimension);
    return () => {
      window.removeEventListener("resize", modalDimension);
    };
  });

  //Modals appearance
  const cardFormAppearance = () => {
    setIndexSelection(-1);
    console.log(indexSelection);

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

  const filterListItems = (e) => {
    let formatInput = e.target.value
      .toLocaleLowerCase()
      .replace(/\s+/g, "")
      .replace("é", "e")
      .replace("è", "e")
      .replace("ê", "e");
    let test = listTitle.filter((item, index) => {
      let formatItem = item.title
        .toLocaleLowerCase()
        .replace(/\s+/g, "")
        .replace("é", "e")
        .replace("è", "e")
        .replace("ê", "e")
        .includes(formatInput);
      return formatItem !== false;
    });
    if (test.length > 0 || formatInput.length > 0) {
      setListTitle(test);
    }
  };

  return (
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
          <InputGroup style={{ width: "200px" }} className="h-25 ">
            <FormControl
              type="search"
              onChange={(e) => filterListItems(e)}
              placeholder="Rechercher"
            />
            <InputGroup.Text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </InputGroup.Text>
          </InputGroup>
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
            setImageFromWebcam={newItemCreation}
            title={title}
          />
        </div>
      </Modal>
    </div>
  );
}

export default Carte;
