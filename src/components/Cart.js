import ListGroup  from 'react-bootstrap/ListGroup';
export default function Cart({cartState}) {
  const addItem = (item) => {
    return (
        <li class="list-group-item"> {item.name}: {item.price} </li>
    );
  };
  
  
  let totalAmount = 0;
  
  cartState.forEach(item => {
    totalAmount += item.price
  }); 
  
  return <div className="ShoppingCart">
              <ListGroup> {cartState.map(addItem)} </ListGroup>
              <p> Total Cooking Time: {totalAmount} minutes</p> <div></div>
            </div>;
}