import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, delecetTodo, editTodo, saveTodo } from "./Todo"; 


function Home() {
  const [editvalue, setEditvalue] = useState("");
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.list.todos); 

  const handleADD = (e) => {                
    e.preventDefault();
    if (input.trim() === "") {
      return null;
    }

    dispatch(addTodo(input));
    setInput(""); 
  };                                                                                                                                                                  

  const save = (id) => {
    dispatch(saveTodo({ id: id, value: editvalue }));
  };

  return (
    <div className="mainDiv" style={{padding:'90px 500px',background:'grey',height:'100vh'}}>
      <div className="headignDiv">
        <h1 style={{ color: "YELLOW",paddingLeft:'25PX' }}>TODO LIST</h1>
        <form action="" onSubmit={handleADD}>
          <input
            placeholder="Add Tasks"
            style={{ width: "200px",height:'30px' }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="inputMain"
          />

          <button type="submit" className="pluseBTN">
            +
          </button>
        </form>
      </div>
      <div>
        <ul>
          {todo.map((todos) => (
            <li className="listDiv" key={todos.id}>
              {todos.editkey ? (
                <>
                  <input
                    style={{ width: "300px",height:'30px' }}
                    value={todos.value}
                    className="inputFields"
                  />
                  <button
                    style={{ color: "blue" }}
                    type="primary"
                    onClick={() => dispatch(editTodo(todos.id))}
                  >
                    Edit
                  </button>
                  &nbsp;
                  <button
                    style={{ color: "red" }}
                    type="primary"
                    onClick={() => dispatch(delecetTodo(todos.id))}
                  >
                    X
                  </button>
                </>
              ) : (
                <>
                  <input
                    type="text"
                    onChange={(e) => setEditvalue(e.target.value)}
                    className="inputFields"
                  />

                  <button type="primary" onClick={() => save(todos.id)}>
                    Save
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
