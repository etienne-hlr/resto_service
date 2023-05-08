import { Card, Button, Form, Image } from "react-bootstrap";

function CardItemCarte({
  image,
  title,
  buttonType,
  buttonClickEvent,
  buttonChangeEvent,
  cardType,
}) {
  return cardType === "card" ? (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Button onClick={buttonClickEvent} variant="primary">
          {buttonType}
        </Button>
      </Card.Body>
    </Card>
  ) : (
    <Form>
      <Image src={image}></Image>
      <Form.Control
        type="text"
        placeholder="Titre de la boisson"
        onChange={(e) => buttonChangeEvent(e.target.value)}
      />
      <Button onClick={buttonClickEvent} variant="primary">
        {buttonType}
      </Button>
    </Form>
  );
}

export default CardItemCarte;
