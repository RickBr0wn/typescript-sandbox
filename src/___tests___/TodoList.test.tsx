import React from 'react'
import { cleanup, render } from '@testing-library/react'
import TodoList from '../components/styled-components/TodoList'

// Mock the useFetchTodos hook
jest.mock('../components/styled-components/useFetchTodos', () => ({
  useFetchTodos: jest.fn(() => ({
    todos: [
      {
        id: 1,
        title: 'Test Item #1',
      },
      {
        id: 2,
        title: 'Test Item #2',
      },
      {
        id: 3,
        title: 'Test Item #3',
      },
    ],
  })),
}))

afterEach(cleanup)

describe('<TodoList />', () => {
  it('should render the `todo-list` on the screen', () => {
    const { getByTestId } = render(<TodoList />)
    expect(getByTestId('todo-list')).toBeInTheDocument()
  })

  it('should render 3 `todo item`s when receiving mocked API call', async () => {
    const { findAllByTestId } = render(<TodoList />)
    const todos = await findAllByTestId('todo-item')
    expect(todos).toHaveLength(3)
  })
})
