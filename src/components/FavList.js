import ListGroup  from 'react-bootstrap/ListGroup';
export default function FavList({favState}) {
  const addItem = (item) => {
    return (
        <li class="list-group-item"> {item.name}: {item.cooking_time} minutes</li>
    );
  };
  
  
  let totalTime = 0;
  
  favState.forEach(item => {
    totalTime += item.cooking_time
  }); 
  
  return <div className="favItems">
              <ListGroup> {favState.map(addItem)} </ListGroup>
              <p> Total Cooking Time: {totalTime} minutes</p>
         </div>;
}