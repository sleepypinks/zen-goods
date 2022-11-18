// TODO: create a component that displays a single bakery item
import App from '../App'
import {useState} from 'react'

export default function BakeryItem({item, addToFavorite, removeFromFavorite}){
    
    const [isFav, setFav] = useState(false);
    
    return (
        <div class="BakeryItem">
          <img src={item.image} class="BakeryImage" />
          <h5>{item.name}</h5>
          <p>{item.description}</p>
          <p>Cooking Time: {item.price} minutes</p>
          <button 
            onClick={() => {!(isFav) ? addToFavorite(item): removeFromFavorite(item); setFav(!isFav);}}>
            {!(isFav) ? "♡ Add to favorites": "❤️ Remove from favorites"}
          </button>
        </div> 
    )
};