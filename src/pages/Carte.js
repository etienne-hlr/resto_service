import React from "react";
import CardItemCarte from "../components/card_item_carte";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Home() {
  return (
    <Row xs={2} md={4} className="g-4">
      {Array.from({ length: 8 }).map((_, idx) => (
        <Col>
          <CardItemCarte
            image="https://www.socialkitchen.fr/photos/logo-thefork.jpg"
            title="Titre de la boisson"
            data="data"
          />
        </Col>
      ))}
    </Row>
  );
}

export default Home;
