function ListGroup() {
  let items = [
    "red", "green", "blue", "yello ", "orange"
  ];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p> }
      <ul className="list-group">
        {items.map((item, index) => (
          <li
           className="list-group-item"
            key={item}
            onClick={(event) => console.log(event)}>{item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
