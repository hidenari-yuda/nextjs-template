import { Color, FontSize, FontWeight, Radius } from 'styles/Enums'
import styled from 'styled-components'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  onUrlChange?: (url: string) => void
}

export const FileInput: React.FC<Props> = ({ onUrlChange, ...rest }) => {
  return (
    <div>
      <Label>
        ファイルを選択
        <Input type="file" {...rest} />
      </Label>
    </div>
  )
}

const Label = styled.label`
  cursor: pointer;
  font-size: ${FontSize.Px11};
  font-weight: ${FontWeight.Bold};
  padding: 0.4rem 1rem;
  border: solid 1px ${Color.LineDark};
  border-radius: ${Radius.Px2};
  display: inline-block;
`
const Input = styled.input`
  display: none;
  position: absolute;
`
