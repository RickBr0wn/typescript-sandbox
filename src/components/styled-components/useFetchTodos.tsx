import React from 'react'
import { State } from './types'

export const useFetchTodos = () => {
  const [todos, setTodos] = React.useState<State>({ todos: [] })

  React.useEffect(() => {
    let mounted = true
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos'
        )
        const data = await response.json()
        if (mounted) {
          setTodos({ todos: data })
        }
      } catch (error) {
        throw new Error(`meh!: ${error}`)
      }
    }
    fetchTodos()
    return () => {
      mounted = false
    }
  }, [])

  return todos
}
