import React from 'react'
import { Text } from './components/styled-components'
import TodoList from './components/styled-components/TodoList'

const App: React.FC = () => {
  return (
    <div data-testid="app">
      <Text fontSize="24px" bold color="#333">
        App
      </Text>
      <TodoList />
    </div>
  )
}

export default App
