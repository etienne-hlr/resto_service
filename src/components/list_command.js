import { React, useState } from "react";
import { ListGroup, Button, Col, Row } from "react-bootstrap";

const CommandList = ({ list }) => {
  const deleteAnOrder = (index) => {
    const newList = items.filter((_, i) => i != index);
    return setItems(newList);
  };

  const [items, setItems] = useState(list);
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
              <Button
                buttonIndex={index}
                onClick={() => deleteAnOrder(index)}
                variant="outline-danger"
              >
                Supprimer
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default CommandList;
