import { useState } from "react";

function ListGroup() {
  const items = ["red", "green", "blue", "red", "green", "blue"];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <ul className="list-group">
      <h1>List</h1>
      {items.length === 0 && <p>no items found</p>}
      {items.map((item, index) => (
        <li
          className={
            selectedIndex === index
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => {
            setSelectedIndex(index);
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
