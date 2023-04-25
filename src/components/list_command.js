import React from "react";
import { ListGroup, Button, Col, Row } from "react-bootstrap";
const CommandList = ({ items }) => {
  return (
    <Row className="d-flex justify-content-center pt-2">
      <Col sm={10} xs={10} md={8}>
        <ListGroup as="ul">
          {items.map((item, index) => (
            <ListGroup.Item
              key={index}
              as="li"
              className="d-flex justify-content-between align-items-center"
            >
              <p>{item}</p>
              <Button variant="outline-danger">Supprimer</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default CommandList;
