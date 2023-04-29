import React, { useState } from "react";
import CardItemCarte from "../components/card_item_carte";
import { InputGroup, Row, Col, FormControl, Button } from "react-bootstrap";

function Carte() {
  const [listTitle, setListTitle] = useState(["", "", "", "", "", "", "", ""]);

  return (
    <div>
      <InputGroup>
        {/* <InputGroup.Text> */}
        <FormControl type="search" placeholder="Rechercher" />
        {/* </InputGroup.Text> */}
      </InputGroup>
      <Button onClick={() => setListTitle([...listTitle, []])}>Ajouter</Button>
      <Row xs={1} sm={2} md={4} className="g-3 p-3">
        {Array.from(listTitle).map((value, index) => (
          <Col key={index}>
            <CardItemCarte
              key={index}
              image="https://www.socialkitchen.fr/photos/logo-thefork.jpg"
              title="Titre de la boisson"
              data="data"
            />
            {console.log(value)}
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Carte;
