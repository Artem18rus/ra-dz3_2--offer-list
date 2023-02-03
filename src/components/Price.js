function Price({ price, currency_code }) {
  let insertCode;

  if (currency_code === "USD") {
    insertCode = `$${price}`;
  } else if (currency_code === "EUR") {
    insertCode = `€${price}`;
  } else {
    insertCode = `${price} GBP`;
  }

  return insertCode;
}
export default Price;
