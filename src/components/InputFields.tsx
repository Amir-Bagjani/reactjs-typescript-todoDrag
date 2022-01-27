import { useRef } from "react";
import "./Styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (e: React.FormEvent) => void;
}

const InputFields: React.FC<Props> = ({ todo, setTodo, addTodo }) => {
  const input = useRef<HTMLInputElement>(null);
  const handleSubmit = (e : React.FormEvent) => {
    addTodo(e);
    input.current?.blur();
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        ref={input}
        type="text"
        className="input"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="input-submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputFields;
