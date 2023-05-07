import React, { useState } from "react";
import CardItemCarte from "../components/card_item_carte";

function ModalCardModification({ buttonClickEvent }) {
  return (
    <>
      <CardItemCarte
        image="https://www.socialkitchen.fr/photos/logo-thefork.jpg"
        title="Titre de la boisson"
        data="data"
        buttonType="Enregistrer"
        buttonClickEvent={buttonClickEvent}
      />
    </>
  );
}

export default ModalCardModification;
