import './App.css';
import { useReducer } from 'react';
const initialTodo = [
  {
    id: 1,
    title: "todo1",
    completed: "true"
  },
  {
    id: 2,
    title: "todo2",
    completed: "false"
  },
  {
    id: 3,
    title: "todo3",
    completed: "false"
  }
]

const reducer=(state, action) => {
  switch(action.type) {
    case "complete":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {...todo,completed:!todo.completed};
        }
        return todo;
      });
    default:
      return state;
  }
}

function App() {
 const [todos, dispatch] = useReducer(reducer, initialTodo)

  return (
    <div className="App">
      <h1>Todo App</h1>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h3>{todo.title}</h3>
            <button onClick={() => dispatch({type:"complete", id:todo.id})}>{todo.completed ? "completed" : "not completed"}</button>
          </div>
        )
      })}
    </div>
  );
}

export default App;
