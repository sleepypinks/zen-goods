import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import Cart from "./components/Cart";
 
/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  
  const [cart, setCart] = useState([]);

  const clickItem = (item) => {
    setCart([...cart, { text: item.name, price: item.price, key: Date.now() }]);
  };
  
  return (
    <div>
    <h1>Z's Bakery</h1>
      <div class="main">
        <div class="BakeryContainer"> 
            {bakeryData.map((item, index) => (
              <BakeryItem item={item} clickItem={clickItem} />
            ))}
          </div>
        <div class="Cart">
          <h2>Cart</h2>
          <Cart cartState={cart}/>
        </div>
    </div>
    </div>
  );
}

export default App;
