import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, todoCompleted } from "../redux/todoSlice";

function TodoApp() {
  const [text, setText] = useState("");

  const todos = useSelector((store) => store.todo);
  const dispatch = useDispatch();
  console.log(todos);


  function handleAdd () {
    if(!text){
        alert('Write some text please..')
    } else
    dispatch(addTodo(text)) 
    setText('');
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col-sm-12 col-md-8 col-lg-4  rounded-3 bg-dark text-light mt-5 p-4">
        <p className=" text-end text-danger">Frontend developer: Murat Kosheterov</p>
          <h3 className="my-5">Redux/Toolkit TodoApp</h3>

          <form >
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className=" w-50"
              type="text"
              id=""
              placeholder="Enter some todos..."
            />
            <button
              onClick={() => dispatch(handleAdd)}
              type="button"
              className="btn btn-success"
            >
              Add task
            </button>
          </form>
          

          {todos.map((todo) => {
            return (
              <div
                key={todo.id}
                className="  d-flex  justify-content-between align-items-center my-3 bg-secondary text-black  fs-4   p-2  px-3 rounded-pill "
              >
                <button
                  onClick={() => dispatch(todoCompleted(todo.id))}
                  className={
                    todo.completed ? "btn btn-primary" : "btn btn-danger"
                  }
                >
                  {todo.completed ? "Completed" : "Uncompleted"}
                </button>
                <p
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                  className=" m-auto"
                >
                  {todo.text}
                </p>
                <i
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="bi bi-trash"
                ></i>
                
              </div>
            );
          })}
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default TodoApp;
