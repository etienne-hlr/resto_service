import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardItemCarte(props) {
  return (
    <Card>
      <Card.Img
        variant="top"
        src="https://www.socialkitchen.fr/photos/logo-thefork.jpg"
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button variant="primary">Modifier</Button>
      </Card.Body>
    </Card>
  );
}

export default CardItemCarte;
