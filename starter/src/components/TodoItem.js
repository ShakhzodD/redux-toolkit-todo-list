import React from "react";
import { useDispatch } from "react-redux";
import {
  toggleCompleteAsync,
  deleteTodoAsync,
  deleteTodo,
} from "../redux/todoSlice";
const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      toggleCompleteAsync({
        id,
        completed: !completed,
      })
    );
  };

  const handleDelete = () => {
    console.log(id);
    dispatch(
      deleteTodoAsync({
        id,
      })
    );
    // dispatch(
    //   deleteTodo({
    //     id,
    //   })
    // );
  };
  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            onChange={handleClick}
            checked={completed}
            onClick={() => handleClick()}
          ></input>
          {title}
        </span>
        <button className="btn btn-danger" onClick={() => handleDelete()}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
