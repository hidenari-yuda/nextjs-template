import { TextColor, FontSize } from 'Styles/Enums'
import { FC } from 'react'
import styled from 'styled-components'
import { Text } from 'Components/Atomic/Text'
import { RowContainer } from 'Components/Atomic/Container'

interface Props {
  title: string
  subTitle?: string
  required: boolean
  widthPercent: number /** 0~100% **/
  children: React.ReactNode
}

// ./TableContainerでラップする
export const TableBlock: FC<Props> = ({
  title,
  subTitle,
  required,
  widthPercent,
  children,
}) => {
  const leftBlockWidth = widthPercent
  const rightBlockWidth = 100 - leftBlockWidth
  return (
    <Block>
      <LeftBlock leftBlockWidth={leftBlockWidth}>
        <Blocktitle>
          {title}
          {required && <RequiredItem>必須</RequiredItem>}
          {subTitle && <Subtitle>{subTitle}</Subtitle>}
        </Blocktitle>
      </LeftBlock>
      <RightBlock rightBlockWidth={rightBlockWidth}>{children}</RightBlock>
    </Block>
  )
}

const Block = styled(RowContainer)`
  padding: 0;
  margin: 0 auto;
  align-items: stretch;
`

const LeftBlock = styled.div<{ leftBlockWidth: number }>`
  width: ${(props) => props.leftBlockWidth}%;
  display: table;
  background-color: #f8f8f8;
  padding: 1rem 0.5rem;
  border-right: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
`

const Blocktitle = styled(Text)`
  font-size: ${FontSize.Px10};
  display: table-cell;
  vertical-align: middle;

  overflow-wrap: anywhere;
`

const Subtitle = styled.span`
  font-size: ${FontSize.Px8};
  display: table-cell;
  vertical-align: middle;
  color: ${TextColor.Gray};
  display: block;
`

const RightBlock = styled.div<{ rightBlockWidth: number }>`
  width: ${(props) => props.rightBlockWidth}%;
  padding: 1rem 1rem;
  border-right: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
`

const RequiredItem = styled.span`
  color: ${TextColor.White};
  background-color: ${TextColor.Red};
  border-radius: 0.3rem;
  font-size: ${FontSize.Px8};
  padding: 0.1rem 0.3rem;
  margin: 0 0.5rem;
`
