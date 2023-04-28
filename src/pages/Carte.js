import React from "react";
import CardItemCarte from "../components/card_item_carte";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Carte() {
  return (
    <Row xs={1} sm={2} md={4} className="g-3 p-3">
      {Array.from({ length: 8 }).map((_, index) => (
        <Col key={index}>
          <CardItemCarte
            key={index}
            image="https://www.socialkitchen.fr/photos/logo-thefork.jpg"
            title="Titre de la boisson"
            data="data"
          />
        </Col>
      ))}
    </Row>
  );
}

export default Carte;
