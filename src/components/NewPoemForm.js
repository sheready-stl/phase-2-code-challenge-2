import React, { useState } from "react";

function NewPoemForm({handleAddPoem ,deletePoem}) {

  const[title, setTitle]=useState('')
  const[content,setContent]=useState('')
  const[author,setAuthor]=useState('')

  function onChangeTitle(e){
    setTitle(e.target.value)
  }
  
  function onChangeAuthor(e){
    setAuthor(e.target.value)
  }
  function onChangeContent(e){
    setContent(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    const newPoem = {
      title,
      content,
      author
  }

  fetch('http://localhost:8004/poems', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPoem),
  })
    .then((r) => r.json())
    .then((poem) => {
    handleAddPoem(poem)
      setTitle("")
      setAuthor("")
      setContent("") 
    });
  }

  return (
    <form onSubmit={handleSubmit} className="new-poem-form">
      <input onChange={onChangeTitle} title="title"
      placeholder="Title"/>
      <input 
      onChange={onChangeAuthor}
      placeholder="Author" 
      author="author" />
      <textarea
      onChange={onChangeContent}
      content='content' 
      placeholder="Write your masterpiece here..." 
      rows={10} />
      <input  type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
