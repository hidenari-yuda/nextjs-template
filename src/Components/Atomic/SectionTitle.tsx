import { Text } from 'Components/Atomic'
import { Color, FontSize, FontWeight } from 'styles/Enums'
import styled from 'styled-components'

type Props = {
  children: React.ReactNode
  hasBorder: boolean
}
export const SectionTitle: React.FC<Props> = ({ children, hasBorder }) => {
  return (
    <>
      <TitleText>{children}</TitleText>
      {hasBorder && <Border />}
    </>
  )
}

const TitleText = styled(Text)`
  font-weight: ${FontWeight.Bold};
  font-size: ${FontSize.Px10};
  margin-bottom: 0.3rem;
  margin-top: 2rem;
`

const Border = styled.div`
  background-color: ${Color.MainHover};
  height: 2px;
  width: 3.2rem;
  margin-bottom: 1.1rem;
`
