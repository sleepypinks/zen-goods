# Development

### Link to Deployed Website
https://sleepypinks.github.io/zen-goods/

### Goal and Value of the Application
The goal of the application is to show users recipes of their choice. The application values people's dietary restrictions and informs users of their needs. It shows vegan friendly and gluten free recipes. 

### Usability Principles Considered

* Effectivity:
The application is effective as it has a menu on the right hand side allowing for quick filters. The user is not overloaded with information and quickly see which recipes take the longest (or shortest time) in addition to which recipes are vegan and gluten free. The design is simple and easy to access.

* Consistency & Readability: 
Each item is consistent with a clear title, description, cook time and vegan/gluten free information. The text is reduced by showing images for vegan and gluten options.

* Design & Layout:
Text is arranged in a way to be read easily by using bootstrap's title, and subtitle! The font and layout are user-friendly with enough padding and margins.

* Visibility:
Instead of a pop up, the favorites and filters are visible on the right of the screen. All the options are visible to the users and convey a consistent conceptual model.

### Organization of Components
There are three components in the code (excluding App.js): BakeryItem, FavList, and FilteredList. 

* `App`: Composes of states for the recipes: favorited and filtered (both), in addition to the raw recipes (i.e. state before any action is applied). It also consists functions for handling user triggers.

* `BakeryItem`: This holds item information, in addition to buttons through which user can add or remove item from favorites.

* `FavList`: This component is similar to the cart component that we implemented in studio. It is an aggregator that shows the total cook time for items added to favorites.

* `FilteredList`: This holds state for the filters that are available for users.

### How Data is Passed Down Through Components
For each component, data is passed down through props.

* BakeryItem: In `App.js`, the following code
<img width="596" alt="Screen Shot 2022-11-23 at 2 12 37 PM" src="https://user-images.githubusercontent.com/113403648/203628750-cc57dd35-5185-4531-a0de-32913000f899.png">
passes down `item` (an object), and `addToFavorite` and `removeFromFavorite` (functions) to `BakeryItem` as props. The functions are defined in `App.js`

* `FavList`: In `App`.js, the following code
<img width="295" alt="Screen Shot 2022-11-23 at 2 14 55 PM" src="https://user-images.githubusercontent.com/113403648/203629056-ee82fbe3-85d7-4c02-bc17-9cbd2f99ca35.png">
passes down `favState` (a list of items that have been favorited by the user) as props. In `FavList`, there is a mapper that aggregates the total cooking time for each item present in the `favState`.

* `FilteredList`: In `App.js`, the following code
<img width="429" alt="Screen Shot 2022-11-23 at 2 16 45 PM" src="https://user-images.githubusercontent.com/113403648/203629317-47f50799-61f7-4132-8ee2-9e69c3e23111.png">
passes functions `addSortFilter`, `addVeganFilter`, `addGlutenFilter`, `removeFilter` as props to `FilteredList`. These functions are called for the option that user selects. The function toggles the internal state depending if the user checked or unchecked the checkbox.

### How the User Triggers State Changes
Selecting or un-selecting the checkboxes at the right of the screen will trigger state change. 
* "Sort by Cook Time" will set the state `recipes` (defined in `App.js`) in order of cooking time. It will also add this filter to the current filter state `setfilter([...filter, sortFilter])`.

* "Vegan" will set the state `recipes` (defined in `App.js`) if the item is vegan. It will also add this filter to the current filter state `setfilter([...filter, veganFilter])`.

* "Sort by Cook Time" will set the state `recipes` (defined in `App.js`) if the item is gluten free. It will also add this filter to the current filter state `setfilter([...filter, glutenFilter])`.

* Unselecting any of the filter, will call `removeFilter` which will first declare a new variable and copy the original items (before any filters were applied). It removes the filter unselected by the user (`setfilter([...newFilters])`) and then it sees which filters are currently present in the state `filter` (defined in `App.js`). For each filter still present, it re-applies the state change depending on the filter functionality.

* User can also trigger the state by adding or removing an item from the favorites. In both cases, the `favList` state will be updated and the aggregator will adjust the `cooking time` depending on the new items in the `favList`.
