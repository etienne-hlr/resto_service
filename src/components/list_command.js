import React from "react";

const CommandList = ({ items }) => {
  console.log(items);
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default CommandList;
