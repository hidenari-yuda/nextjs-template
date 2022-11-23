import { FC } from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

//  ./TableBlockをchildrenに
export const TableContainer: FC<Props> = ({ children }) => {
  return <Container>{children}</Container>
}

const Container = styled.div`
  border-top: 1px solid #e3e3e3;
  border-left: 1px solid #e3e3e3;
`
