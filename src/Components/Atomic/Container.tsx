import { Property } from 'csstype'
import styled from 'styled-components'

export const ColumnContainer = styled.div<{
  justifyContent?: Property.JustifyContent
  alignItems?: Property.AlignItems
}>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent || 'start'};
  align-items: ${(props) => props.alignItems || 'center'};
`

export const RowContainer = styled.div<{
  justifyContent?: Property.JustifyContent
  alignItems?: Property.AlignItems
}>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent || 'start'};
  align-items: ${(props) => props.alignItems || 'center'};
`
