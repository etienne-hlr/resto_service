import React, { useState } from "react";
import CardItemCarte from "../components/card_item_carte";

function ModalCardModification() {
  return (
    <div>
      <CardItemCarte
        image="https://www.socialkitchen.fr/photos/logo-thefork.jpg"
        title="Titre de la boisson"
        data="data"
      />
    </div>
  );
}

export default ModalCardModification;
