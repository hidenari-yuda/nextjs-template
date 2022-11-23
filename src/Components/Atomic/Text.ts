import styled from 'styled-components'
import { FontSize, FontWeight, TextColor } from 'styles/Enums'

export const Text = styled.p<{ fontSize?: FontSize; fontWeight?: FontWeight }>`
  color: ${TextColor.Black};
  font-size: ${(props) => props.fontSize || FontSize.Px16};
  font-weight: ${(props) => props.fontWeight || FontWeight.Regular};
  cursor: text;
  white-space: pre-line;
  word-wrap: break-word;
  font-size: ${(props) => props.fontSize || FontSize.Px16};
`
