import styled from 'styled-components'
import { FontSize, FontWeight, TextColor } from 'styles/Enums'

export const ErrorText = styled.p<{
  fontSize?: FontSize
  fontWeight?: FontWeight
}>`
  color: ${TextColor.Red};
  font-size: ${(props) => props.fontSize || FontSize.Px12};
  font-weight: ${(props) => props.fontWeight || FontWeight.Regular};
  cursor: text;
  white-space: pre-line;
  word-wrap: break-word;
`
