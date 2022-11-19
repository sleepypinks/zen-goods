import App from '../App'
import {useState} from 'react'

export default function FilteredList({addSortFilter, addVeganFilter, addGlutenFilter, removeFilter}) {
  const [isSorted, setSortedOption] = useState(false);
  const [isVegan, setVeganOption] = useState(false);
  const [isGluten, setGlutenOption] = useState(false);
  
  
  const toggleSortedOption = () => {
    !(isSorted) ? addSortFilter("sortbyCookTime"):removeFilter("sortbyCookTime")
    setSortedOption(!isSorted);
  };
  
  const toggleVeganOption = () => {
    !(isVegan) ? addVeganFilter("displayVeganRecipes"):removeFilter("displayVeganRecipes")
    setVeganOption(!isVegan);
  };
  
   const toggleGlutenOption = () => {
     !(isGluten) ? addGlutenFilter("displayGlutenRecipes"):removeFilter("displayGlutenRecipes")
     setGlutenOption(!isGluten);
   };
  
  
  return <div className="filterOptions">
    <div className="Sort">
      <input class="form-check-input" type="checkbox" checked={isSorted} onChange={toggleSortedOption} id="Sort" />
      <label class="form-check-label" for="Sort"> Sort by Cook Time</label>
    </div>
    
    <div className="Vegan">
      <input class="form-check-input" type="checkbox" checked={isVegan} onChange={toggleVeganOption} id="Vegan" />
      <label class="form-check-label" for="Vegan"> Vegan</label>
    </div>
    
    <div className="GlutenFree">
      <input class="form-check-input" type="checkbox" checked={isGluten} onChange={toggleGlutenOption} id="GlutenFree" />
      <label class="form-check-label" for="GlutenFree"> Gluten Free</label>
    </div>
  </div>;
}