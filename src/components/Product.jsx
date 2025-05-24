export default function Product(props) {
  return (
    <div className="App-Product-Box">
      <h2>{props.value.name}</h2>
      <h3>{props.value.price}</h3>
      <button>Add to Cart</button>
    </div>
  );
}
