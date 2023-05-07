import React, { useState } from "react";
import CardItemCarte from "../components/card_item_carte";
import { InputGroup, Row, Col, FormControl, Button } from "react-bootstrap";
import ModalCardModification from "./ModalCardModification";

function Carte() {
  const [listTitle, setListTitle] = useState(["", "", "", "", "", "", "", ""]);
  const [display, setDisplay] = useState("d-none");
  const [opacity, setOpacity] = useState("opacity-100");
  //() => setListTitle([...listTitle, []])

  const cardFormAppearance = () => {
    setOpacity("opacity-25");
    setDisplay("d-block");
  };

  const newItemCreation = () => {
    setOpacity("opacity-100");
    setDisplay("d-none");
    setListTitle([...listTitle, []]);
  };

  return (
    <div className="position-relative">
      <div
        className={`position-absolute top-50 start-50 translate-middle ${display}`}
        style={{ zIndex: 3 }}
      >
        <ModalCardModification buttonClickEvent={newItemCreation} />
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
                image="https://www.socialkitchen.fr/photos/logo-thefork.jpg"
                title="Titre de la boisson"
                data="data"
                buttonType="Modifier"
              />
              {console.log(value)}
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Carte;
