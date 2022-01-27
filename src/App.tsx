import { useState } from "react";
import InputFields from "./components/InputFields";
import TodosList from "./components/TodosList";
import { Todo } from "./model";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import "./App.css";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>(``);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo !== ``) {
      setTodos((prevTodo) => [
        ...prevTodo,
        { id: Date.now(), todo, isDone: false },
      ]);
      setTodo(``);
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) return;

    let add,
      active = [...todos],
      complete = [...completedTodos];

    if (source.droppableId === "TodoList") {
      add = active[source.index];
      active.splice(source.index, 1)
    }else{
      add = complete[source.index];
      complete.splice(source.index, 1)
    }

    if (destination.droppableId === "TodoList") {
      active.splice(destination.index, 0, add)
    }else{
      complete.splice(destination.index, 0, add)
    }

    setTodos(active)
    setCompletedTodos(complete)
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputFields todo={todo} setTodo={setTodo} addTodo={addTodo} />
        <TodosList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
