import React, { useState } from "react";

function Poem({ fav, handleRemoveFav, title, content, author, id, onDeleteItem, handleFav }) {
  const[inner, setInner]=useState(false)
  const[innerFav, setinnerFav]=useState(false)

  function checkRead(){
    setInner(!inner)
  }

  function onClickAdd(id, title, author, content){
    setinnerFav(true)
    let poem = {
      id, title, author, content
    }
    handleFav(poem)
  }

  function handleDeleteClick(id) {
    fetch(`http://localhost:8004/poems/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteItem(id));
  }

  function onDelFav(id){
    setinnerFav(!innerFav)
    handleRemoveFav(id)
  }

  const btn =
    <>
    <button style={{textDecorationLine:inner ?'line-through':''}} onClick={checkRead}>{inner ? "Mark as unread":"Mark as read"}</button>
    <button style={{ margin: "5px", background: "red" }} onClick={() => handleDeleteClick(id)}>Delete</button>
    <button onClick={()=>innerFav ? onDelFav(id):onClickAdd(id,title,author,content)} style={{ margin: "5px", background: "green" }}>{innerFav ? 'Remove From Favourite':'Add Favourite'}</button>
    </>

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- By {author} </strong>
      </p>

     {!fav ? btn : null}

    </div>
  );
}

export default Poem;
