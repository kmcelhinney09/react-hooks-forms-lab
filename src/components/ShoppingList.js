import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items, addNewItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
 

  function handleCategoryChange(event) {
      setSelectedCategory(event.target.value);
  }

  function onSearchChange(event){
    setSearch(event.target.value)
  }

  function onItemFormSubmit(newItem){
    addNewItem(newItem)
  }

  const filteredItems = items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

  const itemsToDisplay = filteredItems.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm
        onItemFormSubmit={onItemFormSubmit}
      />
      <Filter 
      selectedCategory={selectedCategory} 
      onCategoryChange={handleCategoryChange} 
      search={search} 
      onSearchChange={onSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
