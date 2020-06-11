import React from 'react'
import { useFetchTodos } from './useFetchTodos'

const TodoList: React.FC = () => {
  const { todos } = useFetchTodos()

  return (
    <ul data-testid="todo-list">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <li data-testid="todo-item" key={todo.id}>
            {todo.title}
          </li>
        ))
      ) : (
        <p>loading data</p>
      )}
    </ul>
  )
}

export default TodoList
