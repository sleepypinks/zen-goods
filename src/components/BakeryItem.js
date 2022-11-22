// TODO: create a component that displays a single bakery item
import App from '../App'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BakeryItem({item, addToFavorite, removeFromFavorite}){
    
    const [isFav, setFav] = useState(false);
    let vegan = ''
    if (item.vegan === "yes"){
      vegan = 'https://www.barry-callebaut.com/sites/default/files/styles/paragraph_text_and_image_left_right/public/2020-01/CAL%20icon%20VEGAN%20rgb.jpg';}
      
    let gluten_free = ''
    if (item.gluten_free === "yes"){
      gluten_free = 'http://content.health.harvard.edu/wp-content/uploads/2022/03/1a1b8e24-3224-41f5-a613-00f28f27cc06.jpg';}

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