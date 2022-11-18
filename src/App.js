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
  
  const addToFavorite = (item) => {
    if (!(cart.includes(item))){
      setCart([...cart, item]);
    }
  };
  
  const removeFromFavorite = (i) => {
    let filteredCart = cart.filter(function(item) { 
        return item !== i
    });
    setCart([...filteredCart]);
  };
    
  return (
    <div class="container">
      <div class="jumbotron">
        <h1>Z's Recipes 🕊️</h1>
        <p> </p>
          <div class="main">
            <div class="BakeryContainer"> 
            {bakeryData.map((item, index) => (
              <BakeryItem item={item} addToFavorite={addToFavorite} removeFromFavorite={removeFromFavorite} />
            ))}
          </div>
        <div class="Cart">
          <p class="h4">Your Favs ❤️</p>
          <Cart cartState={cart}/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
