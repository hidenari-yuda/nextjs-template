import styled from 'styled-components'
import { Color, Radius, TextColor } from 'styles/Enums'

export const SelectContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  & > span:not(:last-child) {
    margin-right: 0.4rem;
  }
  & > span {
    margin-bottom: 0.4rem;
  }
`

export const SelectItem = styled.span`
  background-color: ${Color.Main};
  color: ${TextColor.White};
  font-size: 15px;
  padding: 2px 6px;
  border-radius: ${Radius.Px2};
  float: left;
`
