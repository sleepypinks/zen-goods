  import 'bootstrap/dist/css/bootstrap.min.css';
  import "./App.css";
  import bakeryData from "./assets/bakery-data.json";
  import BakeryItem from "./components/BakeryItem";
  import FavList from "./components/FavList";
  import FilteredList from "./components/FilteredList";
  
  
  import { useState } from "react";
   
  /* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
  bakeryData.forEach((item) => {
    item.image = process.env.PUBLIC_URL + "/" + item.image;
  });
  /* ############################################################## */

  function App() {
    // TODO: use useState to create a state variable to hold the state of the cart
    /* add your cart state code here */
    
    const [favList, setFav] = useState([]);
    const [filter, setfilter] = useState([]);
    const [recipes, setRecipes] = useState(bakeryData)
    
    const addToFavorite = (item) => {
      if (!(favList.includes(item))){
        setFav([...favList, item]);
      }
    };
    
    const removeFromFavorite = (i) => {
      let filteredFav = favList.filter(function(item) { 
          return item !== i
      });
      setFav([...filteredFav]);
    };
    
    const addSortFilter = (sortFilter) => {
      if (!(filter.includes(sortFilter))){
        setfilter([...filter, sortFilter]);
      }
      let sortedRecipes = [...recipes].sort( (a,b) => a.cooking_time > b.cooking_time ? 1 : -1 );
      setRecipes([...sortedRecipes]);
    };
    
    const addVeganFilter = (veganFilter) => {
      if (!(filter.includes(veganFilter))){
        setfilter([...filter, veganFilter]);
      }
      let veganRecipes = [...recipes].filter(function(item) {
        return (item.vegan === "yes")
      });
      setRecipes([...veganRecipes]);
    };
    
    const addGlutenFilter = (glutenFilter) => {
      if (!(filter.includes(glutenFilter))){
        setfilter([...filter, glutenFilter]);
      }
      let glutenRecipes = [...recipes].filter(function(item) {
        return (item.gluten_free === "yes")
      });
      setRecipes([...glutenRecipes]);
    };
    
    function removeFilter(filterName){
      let newFilters = filter.filter(function(item) {       
          return item !== filterName
      });
      setfilter([...newFilters]);
      //applyAfterFilter();
      setRecipes([...bakeryData]);
      for (let i = 0; i < newFilters.length; i++) { 
          if (newFilters[i] === "sortbyCookTime"){
            addSortFilter(newFilters[i])
          }
          else if(newFilters[i] === "displayVeganRecipes"){
            addVeganFilter(newFilters[i])
          }
          else if (newFilters[i] === "displayGlutenRecipes"){
            addGlutenFilter(newFilters[i])
          }
       }
    };
    
    function applyAfterFilter(){
      setRecipes([...bakeryData]);
      for (let i = 0; i < filter.length; i++) { 
          if (filter[i] === "sortbyCookTime"){
            addSortFilter(filter[i])
          }
          else if(filter[i] === "displayVeganRecipes"){
            addVeganFilter(filter[i])
          }
          else if (filter[i] === "displayGlutenRecipes"){
            addGlutenFilter(filter[i])
          }
       }
    }
    
    return (
      <div class="container">
        <div class="jumbotron">
          <h1>Z's Recipes 🕊️</h1>
          <p> </p>
            <div class="main">
              <div class="BakeryContainer">
              {recipes.map((item, index) => (
                <BakeryItem item={item} 
                            addToFavorite={addToFavorite} 
                            removeFromFavorite={removeFromFavorite} key={index}/>
              ))}
              </div>
              <div class="FilterOptions">
                <p class="h4">Filter Options</p>
                <FilteredList addSortFilter={addSortFilter} 
                              addVeganFilter={addVeganFilter} 
                              addGlutenFilter={addGlutenFilter} 
                              removeFilter={removeFilter}/>
                <p class="h4">Your Favs ❤️</p>
                <FavList favState={favList}/>
              </div>
            </div>
          </div>
        </div>
    );
  }

  export default App;