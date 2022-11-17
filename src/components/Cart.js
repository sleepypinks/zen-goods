export default function Cart({cartState}) {
  const addItem = (item) => {
    return (
      <li>{item.text}: {item.price}</li>
    );
  };
  
  let totalAmount = 0;
  
  cartState.forEach(item => {
    totalAmount += item.price
  }); 


  totalAmount = totalAmount.toFixed(2);
  
  return <div className="ShoppingCart">
    <p> {cartState.map(addItem)} </p>
    <p> Total Amount to be paid: ${totalAmount} </p>
  </div>;
}