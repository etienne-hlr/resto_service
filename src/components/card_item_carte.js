import { Card, Button, Form, CloseButton } from "react-bootstrap";

function CardItemCarte({
  image,
  title,
  buttonType,
  buttonClickEvent,
  buttonChangeEvent,
  cardType,
  crossClickEvent,
}) {
  //Create a card or a form modal depending if the props is set to card or form
  return cardType === "card" ? (
    <Card className="position-relative ">
      <CloseButton
        onClick={crossClickEvent}
        className="position-absolute top-0 end-0 m-2"
      />
      <Card.Img
        style={{ width: "100%", height: "40vh", objectFit: "cover" }}
        variant="top"
        src={image}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Button onClick={buttonClickEvent} variant="primary">
          {buttonType}
        </Button>
      </Card.Body>
    </Card>
  ) : (
    <Card>
      <Form className="position-relative">
        <CloseButton
          onClick={crossClickEvent}
          className="position-absolute top-0 end-0 m-2"
        />

        <Card.Img
          style={{ width: "100%", height: "40vh", objectFit: "cover" }}
          variant="top"
          src={image}
        />
        <Card.Body>
          <Form.Control
            className="m-1"
            type="text"
            placeholder="Titre de la boisson"
            onChange={(e) => buttonChangeEvent(e.target.value)}
            value={title}
          />
          <Button className="m-1" onClick={buttonClickEvent} variant="primary">
            {buttonType}
          </Button>
        </Card.Body>
      </Form>
    </Card>
  );
}

export default CardItemCarte;
