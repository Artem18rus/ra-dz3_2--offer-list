function Quantity({ quantity }) {
  let lighting;
  if (quantity <= 10) {
    lighting = "item-quantity level-low";
  } else if (quantity > 10 && quantity <= 20) {
    lighting = "item-quantity level-medium";
  } else {
    lighting = "item-quantity level-high";
  }

  return <p className={lighting}>{quantity + " left"}</p>;
}
export default Quantity;
