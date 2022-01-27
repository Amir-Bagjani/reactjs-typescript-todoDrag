export interface Todo {
    id: number,
    todo: string,
    isDone: boolean
}




// import { useReducer } from "react";
// import { Todo } from "../model";

// type Action =
//   | { type: `add`; payload: string }
//   | { type: `remove`; payload: number }
//   | { type: `done`; payload: number };

// const TReducer = (state: Todo[], action: Action) => {
//   switch (action.type) {
//     case "add":
//       return [
//         ...state,
//         { id: Date.now(), todo: action.payload, isDone: false },
//       ];

//     case "remove":
//       return [...state.filter((item) => item.id !== action.payload)];

//     case "done":
//       return [
//         ...state.map((item) =>
//           item.id === action.payload ? { ...item, isDone: !item.isDone } : item
//         ),
//       ];

//     default:
//       return state;
//   }
// };

// function TodoReducer() {
//   const [state, dispatch] = useReducer(TReducer, []);
//   return <div />;
// }

// export default TodoReducer;
