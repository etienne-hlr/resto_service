import React, { useState, useEffect } from "react";
import CardItemCarte from "../components/card_item_carte";
import { InputGroup, Row, Col, FormControl, Button } from "react-bootstrap";

function Carte() {
  const [listTitle, setListTitle] = useState([
    {
      image:
        "https://www.il-posto-restaurant.fr/wp-content/uploads/2017/09/p_1_2_9_129-thickbox_default-Maxi-Coca-15l.jpg",
      title: "Coca",
    },
    {
      image:
        "https://cdn.monoprix.fr/cdn-cgi/image/width=580,quality=80,format=auto,metadata=none/assets/images/grocery/1032781/580x580.jpg",
      title: "Ice tea",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1024px-A_small_cup_of_coffee.JPG",
      title: "Café",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Beer_mug_transparent.png/220px-Beer_mug_transparent.png",
      title: "Bière",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Apple_juice_with_3apples-JD.jpg/1024px-Apple_juice_with_3apples-JD.jpg",
      title: "Jus de pomme",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Brick_tea_4897.jpg/1024px-Brick_tea_4897.jpg",
      title: "Thé",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/88/Glass_of_Red_Wine_with_a_bottle_of_Red_Wine_-_Evan_Swigart.jpg",
      title: "Vin",
    },
    {
      image:
        "https://www.lesrhumsdumonde.com/675-large_default/rhum-don-papa-baroko.jpg",
      title: "Rhum",
    },
  ]);
  const [display, setDisplay] = useState("d-none");
  const [opacity, setOpacity] = useState("opacity-100");
  const [title, setTitle] = useState("Titre de la boisson");
  const [imgUrl, setImgUrl] = useState(
    "https://www.socialkitchen.fr/photos/logo-thefork.jpg"
  );

  const [indexSelection, setIndexSelection] = useState(-1);

  console.log(listTitle);
  const cardFormAppearance = () => {
    setIndexSelection(-1);
    console.log(indexSelection);

    setOpacity("opacity-25");
    setDisplay("d-block");
  };

  const modifyAnItem = (index) => {
    setIndexSelection(index);
    setImgUrl(listTitle[index]["image"]);
    setTitle(listTitle[index]["title"]);
    setOpacity("opacity-25");
    setDisplay("d-block");
  };

  const newItemCreation = (image, title) => {
    setOpacity("opacity-100");
    setDisplay("d-none");
    if (indexSelection < 0) {
      console.log(indexSelection);
      setListTitle([...listTitle, { image: image, title: title }]);
    } else {
      const newList = listTitle.map((value, index) => {
        if (indexSelection == index) {
          value.image = image;
          value.title = title;
          return value;
        } else {
          return value;
        }
      });
      setListTitle(newList);
    }
    setTitle("");
    setImgUrl("https://www.socialkitchen.fr/photos/logo-thefork.jpg");
    setIndexSelection(-1);
  };

  const changeTitle = (input) => {
    setTitle(input);
  };

  const closeForm = () => {
    setOpacity("opacity-100");
    setDisplay("d-none");
  };

  const deleteAnItem = (index) => {
    listTitle.splice(index, 1);
    setListTitle([...listTitle]);
  };

  return (
    <div className="position-relative">
      <div
        className={`position-absolute top-50 start-50 translate-middle ${display}`}
        style={{ zIndex: 3 }}
      >
        <CardItemCarte
          image={imgUrl}
          title={title}
          data="data"
          buttonType="Enregistrer"
          buttonClickEvent={() => newItemCreation(imgUrl, title)}
          buttonChangeEvent={changeTitle}
          cardType="form"
          crossClickEvent={closeForm}
        />
      </div>
      <div className={`${opacity}`}>
        <InputGroup>
          <InputGroup.Text>
            <FormControl type="search" placeholder="Rechercher" />
          </InputGroup.Text>
        </InputGroup>
        <Button
          onClick={() => {
            cardFormAppearance();
          }}
        >
          Ajouter
        </Button>
        <Row xs={1} sm={2} md={4} className="g-3 p-3">
          {listTitle.map((value, index) => (
            <Col key={index}>
              <CardItemCarte
                key={index}
                image={value.image}
                title={value.title}
                data="data"
                buttonType="Modifier"
                cardType="card"
                buttonClickEvent={() => modifyAnItem(index)}
                crossClickEvent={() => {
                  deleteAnItem(index);
                }}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Carte;
