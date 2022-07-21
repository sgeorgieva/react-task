import { useEffect, useState } from 'react';

const TodosPage = () => {
  const [todos, setTodos] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com/todos';

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          return new Error('Error!');
        }
        return res.json();
      })
      .then((data) => setTodos(data));
  }, []);

  return (
    <ul>
      {todos.length &&
        todos.map((todo) => (
          <li key={todo.id}>
            <p>UserId: {todo.userId}</p>
            <p>Title: {todo.title}</p>
            <p>Completed: {todo.completed.toString()}</p>
          </li>
        ))}
    </ul>
  );
};

export default TodosPage;
