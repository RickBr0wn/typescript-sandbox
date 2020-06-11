import React from 'react'
import { Button } from './styled-components'

interface Props {
  initialValue: number
}

const Counter: React.FC<Props> = function (props) {
  const [counter, setCounter] = React.useState<number>(props.initialValue)

  return (
    <React.Fragment>
      <Button onClick={() => setCounter((prev) => prev + 1)}>Add</Button>
      <Button onClick={() => setCounter((prev) => prev - 1)}>Minus</Button>
      {counter}
    </React.Fragment>
  )
}

export default Counter
