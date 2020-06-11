import styled from 'styled-components'

interface TextElement {
  props: {
    fontSize?: string
    bold?: boolean
    color?: string
  }
}

/**
 * styled-component <Text>: displays the text supplied as a child.
 */
const Text = styled.div`
  font-size: ${(props: TextElement['props']) =>
    props.fontSize ? props.fontSize : '16px'};
  font-weight: ${(props: TextElement['props']) =>
    props.bold ? 'bolder' : null};
  color: ${(props: TextElement['props']) =>
    props.color ? props.color : 'inherit'};
`

export default Text
