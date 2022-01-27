import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import "./Styles.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodosList: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  return (
    <div className="container">
      <Droppable droppableId="TodoList">
        {(provided, snapshot) => (
          <div
            className={snapshot.isDraggingOver ? `todos active-drag` : `todos`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="active-tasks">Active Tasks</span>
            {todos.map((todo, index) => (
              <SingleTodo
                index={index}
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodoCompleted">
        {(provided, snapshot) => (
          <div
            className={snapshot.isDraggingOver ? `todos remove active-drop` : `todos remove`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="active-tasks">Completed Tasks</span>
            {completedTodos.map((todo, index) => (
              <SingleTodo
                index={index}
                key={todo.id}
                todo={todo}
                todos={completedTodos}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodosList;
