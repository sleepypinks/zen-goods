// TODO: create a component that displays a single bakery item
import App from '../App'

const BakeryItem = ({item, clickItem}) => {
    return (
        <div class="BakeryItem">
          <img src={item.image} class="BakeryImage" />
          <h5>{item.name}</h5>
          <p>{item.description}</p>
          <p>Price: {item.price}</p>
          <button onClick={() => clickItem(item)}>Add to Cart</button>
        </div> 
    )
};

export default BakeryItem;