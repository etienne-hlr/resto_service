import React, { useState } from "react";
import CardItemCarte from "../components/card_item_carte";

function ModalCardModification({ buttonClickEvent, image, title }) {
  return (
    <>
      <CardItemCarte
        image={image}
        title={title}
        data="data"
        buttonType="Enregistrer"
        buttonClickEvent={buttonClickEvent}
      />
    </>
  );
}

export default ModalCardModification;
