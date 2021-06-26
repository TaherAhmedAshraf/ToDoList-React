import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ToDoList from "./ToDoList"


function App() {
  const [inputList, setInputList] = useState("")
  const [items, setItmes] = useState([])
  const itemEvent = (event) => {
    setInputList(event.target.value)
  }

  const listOfItems = () => {
    setItmes((oldItems) => {
      return [...oldItems, inputList]
    });
    setInputList(" ")
  };
  const deleteItem = (id) =>{
    setItmes((oldItems)=>{
      return oldItems.filter((arrElem, index) =>{
        return index !== id;
      })
    })
  }
  
  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1>ToDo List</h1>
          <div className="input-div">
            <input type="text" placeholder="Enter a item" value={inputList} onChange={itemEvent} />
            <button onClick={listOfItems}> + </button>
          </div>
          <ol>
            {items.map((itemVal, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  text={itemVal}
                  onSelect={deleteItem}
                />
              )
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
