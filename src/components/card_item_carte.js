import { Card, Button, Form, CloseButton } from "react-bootstrap";

function CardItemCarte({
  image,
  title,
  buttonType,
  buttonClickEvent,
  buttonChangeEvent,
  cardType,
  crossClickEvent,
  imgClick,
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
        <div className="position-relative">
          <div className="position-absolute top-50 start-50 translate-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="250"
              height="250"
              opacity="0.5"
              fill="gray"
              class="bi bi-images"
              viewBox="0 0 16 16"
            >
              <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
              <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
            </svg>
          </div>
          <Card.Img
            style={{ width: "100%", height: "40vh", objectFit: "cover" }}
            variant="top"
            src={image}
            onClick={imgClick}
          />
        </div>
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
