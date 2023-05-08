import React, { useState } from "react";
import CardItemCarte from "../components/card_item_carte";
import { InputGroup, Row, Col, FormControl, Button } from "react-bootstrap";
import ModalCardModification from "./ModalCardModification";

function Carte() {
  const [listTitle, setListTitle] = useState([
    {
      image: "https://www.socialkitchen.fr/photos/logo-thefork.jpg",
      title: "Titre de la boisson",
    },
    {
      image: "https://www.socialkitchen.fr/photos/logo-thefork.jpg",
      title: "Titre de la boisson",
    },
    {
      image: "https://www.socialkitchen.fr/photos/logo-thefork.jpg",
      title: "Titre de la boisson",
    },
    {
      image: "https://www.socialkitchen.fr/photos/logo-thefork.jpg",
      title: "Titre de la boisson",
    },
    {
      image: "https://www.socialkitchen.fr/photos/logo-thefork.jpg",
      title: "Titre de la boisson",
    },
    {
      image: "https://www.socialkitchen.fr/photos/logo-thefork.jpg",
      title: "Titre de la boisson",
    },
    {
      image: "https://www.socialkitchen.fr/photos/logo-thefork.jpg",
      title: "Titre de la boisson",
    },
    {
      image: "https://www.socialkitchen.fr/photos/logo-thefork.jpg",
      title: "Titre de la boisson",
    },
  ]);
  const [display, setDisplay] = useState("d-none");
  const [opacity, setOpacity] = useState("opacity-100");
  const [title, setTitle] = useState("Titre de la boisson");

  const cardFormAppearance = () => {
    setOpacity("opacity-25");
    setDisplay("d-block");
  };

  const newItemCreation = (image, title) => {
    setOpacity("opacity-100");
    setDisplay("d-none");
    setListTitle([...listTitle, { image: image, title: title }]);
  };

  const changeTitle = (input) => {
    setTitle(input);
  };

  let inputImage = "https://www.socialkitchen.fr/photos/logo-thefork.jpg";
  let inputTitle = "Titre de la boisson";

  return (
    <div className="position-relative">
      <div
        className={`position-absolute top-50 start-50 translate-middle ${display}`}
        style={{ zIndex: 3 }}
      >
        <ModalCardModification
          buttonChangeEvent={changeTitle}
          buttonClickEvent={() => newItemCreation(inputImage, title)}
          image={inputImage}
          title={inputTitle}
        />
      </div>
      <div className={`${opacity}`}>
        <InputGroup>
          {/* <InputGroup.Text> */}
          <FormControl type="search" placeholder="Rechercher" />
          {/* </InputGroup.Text> */}
        </InputGroup>
        <Button onClick={cardFormAppearance}>Ajouter</Button>
        <Row xs={1} sm={2} md={4} className="g-3 p-3">
          {Array.from(listTitle).map((value, index) => (
            <Col key={index}>
              <CardItemCarte
                key={index}
                image={value.image}
                title={value.title}
                data="data"
                buttonType="Modifier"
                cardType="card"
              />
              {console.log(listTitle)}
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Carte;
