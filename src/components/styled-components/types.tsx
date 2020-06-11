export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export interface State {
  todos: Array<Todo>
}

export interface Action {
  readonly type: string
  readonly payload: string
}
