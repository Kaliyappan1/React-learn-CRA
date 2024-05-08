function ListGroup() {
  const items = [
    "red", "green", "blue", "yello ", "orange"
  ]
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
