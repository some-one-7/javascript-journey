export const initialState = {
  todos: []
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        todos: [...state.todos, { id: Date.now(), text: action.payload, done: false }]
      };

    case "DELETE":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      };

    case "TOGGLE":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo
        )
      };

    default:
      return state;
  }
};
