import { Card, Button, Form, Image, CloseButton } from "react-bootstrap";

function CardItemCarte({
  image,
  title,
  buttonType,
  buttonClickEvent,
  buttonChangeEvent,
  cardType,
  crossClickEvent,
}) {
  return cardType === "card" ? (
    <Card className="position-relative ">
      <CloseButton
        onClick={crossClickEvent}
        className="position-absolute top-0 end-0 m-2"
      />
      <Card.Img src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Button onClick={buttonClickEvent} variant="primary">
          {buttonType}
        </Button>
      </Card.Body>
    </Card>
  ) : (
    <Form className="position-relative">
      <CloseButton
        onClick={crossClickEvent}
        className="position-absolute top-0 end-0 m-2"
      />
      <Image src={image}></Image>
      <Form.Control
        type="text"
        placeholder={title}
        onChange={(e) => buttonChangeEvent(e.target.value)}
      />
      <Button onClick={buttonClickEvent} variant="primary">
        {buttonType}
      </Button>
    </Form>
  );
}

export default CardItemCarte;
