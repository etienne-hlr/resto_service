import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardItemCarte({ image, title, buttonType }) {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button variant="primary">{buttonType}</Button>
      </Card.Body>
    </Card>
  );
}

export default CardItemCarte;
