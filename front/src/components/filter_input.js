import { InputGroup, FormControl } from "react-bootstrap";
import React, { useState, useEffect } from "react";

const filterListItems = (e, secondList, filterSetTitle) => {
  let formatInput = e.target.value
    .toLocaleLowerCase()
    .replace(/\s+/g, "")
    .replace("é", "e")
    .replace("è", "e")
    .replace("ê", "e");
  let setFilter = secondList.filter((item, index) => {
    let formatItem = item.title
      .toLocaleLowerCase()
      .replace(/\s+/g, "")
      .replace("é", "e")
      .replace("è", "e")
      .replace("ê", "e")
      .includes(formatInput);
    return formatItem !== false;
  });
  if (setFilter.length > 0 || formatInput.length > 0) {
    filterSetTitle(setFilter);
  }
};

const FilterInput = ({ listElement, filterSetTitle }) => {
  const [secondList, setSecondList] = useState([]);

  useEffect(() => {
    if (listElement.length > secondList.length) {
      setSecondList(listElement);
    }
  }, [listElement, secondList]);

  return (
    <>
      <InputGroup style={{ width: "200px" }} className="h-25 ">
        <FormControl
          type="search"
          onChange={(e) => filterListItems(e, secondList, filterSetTitle)}
          placeholder="Rechercher"
        />
        <InputGroup.Text>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </InputGroup.Text>
      </InputGroup>
    </>
  );
};

export default FilterInput;
