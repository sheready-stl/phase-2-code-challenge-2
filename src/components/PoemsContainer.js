import React from "react";
import Poem from "./Poem";

function PoemsContainer({ fav,handleRemoveFav, handleFav , poems , onDeleteItem }) {

  const poemList = poems.map((poem)=>(
    
    <Poem
    key = {poem.id}
    id = {poem.id}         
    title = {poem.title}
    content = {poem.content}
    author = {poem.author}
    onDeleteItem = {onDeleteItem}
    handleFav = {handleFav}
    handleRemoveFav = {handleRemoveFav}
    fav = {fav}
    />
  )
)
  return (
    <div className="poems-container">
      { poemList }
    </div>
  );
}

export default PoemsContainer;
