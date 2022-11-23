import styled from 'styled-components'
import { Color, FontSize, FontWeight, Radius, TextColor } from 'styles/Enums'

export const MainButton = styled.button<{
  fontSize?: FontSize
  fontWeight?: FontWeight
}>`
  padding: 0 0.5rem;
  font-weight: ${(props) => props.fontWeight || FontWeight.Bold};
  background-color: ${Color.Main};
  color: ${TextColor.White};
  font-size: ${(props) => props.fontSize || FontSize.Px16};
  border-radius: ${Radius.Px3};
  cursor: pointer;
`
