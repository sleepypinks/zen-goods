// TODO: create a component that displays a single bakery item
import App from '../App'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BakeryItem({item, addToFavorite, removeFromFavorite}){
    
    const [isFav, setFav] = useState(false);
    let vegan = ''
    if (item.vegan === "yes"){
      vegan = '../images/vegan.jpg';}
      
    let gluten_free = ''
    if (item.gluten_free === "yes"){
      gluten_free = '../images/gluten_free.png';}

    return (
        <div class="BakeryItem">
          <img src={item.image} class="BakeryImage" />
          <p class="h4">{item.name}</p>
          <p class="h6">{item.description}</p>
          <p>Cook Time: {item.cooking_time} minutes</p>
          <div class="Banner">
              {vegan.length !== 0 ? <div class="Icon"><img src={vegan} width="75" height="75"/></div>:<p></p>}
              {gluten_free.length !== 0 ? <div class="Icon"><img src={gluten_free} width="75" height="75"/></div>:<p></p>}
          </div>
          <button 
            onClick={() => {!(isFav) ? addToFavorite(item): removeFromFavorite(item); setFav(!isFav);}}>
            {!(isFav) ? "♡ Add to favorites": "❤️ Remove from favorites"}
          </button>
        </div> 
    )
};