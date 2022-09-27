import React, { useState, useEffect } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {

  const [poems ,setPoems]=useState([])
  const [poemForm, setPoemForm] = useState(true);
  const [myFav, setMyFav] = useState([])

  useEffect(()=>{
    fetch('http://localhost:8004/poems')
    .then((res)=>res.json())
    .then((data)=>{
      setPoems(data)
    })
  }, [])

  function handleFormClick() {
    setPoemForm(!poemForm);
  }

  function handleAddPoem(poem){
    setPoems([...poems ,poem])
  }

  function handleFav(favPoem){
    setMyFav([...myFav, favPoem])

  }

  function handleRemoveFav(id){
    const FavToRemove = myFav.filter((poem)=>poem.id!==id)
    setMyFav(FavToRemove)
  }

  function deletePoem(id) {
    const updatedPoems = poems.filter(poem => poem.id !== id)
    setPoems(updatedPoems)
  }

  const message = <p><i>Your Favourite Poems Go Here...</i></p>

  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={handleFormClick}>Show/hide new poem form</button>
        {poemForm ? <NewPoemForm handleAddPoem={handleAddPoem} /> : null}

        <h1 style={{textAlign:'center'}}>Favourite Poems</h1>

        {myFav.length > 0 
        ? <PoemsContainer fav={true} handleRemoveFav={handleRemoveFav} handleFav={handleFav} poems={myFav} onDeleteItem={deletePoem} />
        : message
      }
      </div>

      <PoemsContainer fav={false}handleRemoveFav={handleRemoveFav} handleFav={handleFav} poems={poems} onDeleteItem={deletePoem} />

    </div>
  );
}

export default App;
