import { TextColor, Color, Radius } from 'styles/Enums'
import { Property } from 'csstype'
import { forwardRef, InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { ErrorText } from '../ErrorText'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  width?: Property.Width
}

// eslint-disable-next-line react/display-name
export const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ error, width, ...rest }, ref) => {
    return (
      <div style={{ width }}>
        <Input
          error={error != undefined}
          style={{ width }}
          ref={ref}
          {...rest}
        />
        <ErrorText>{error}</ErrorText>
      </div>
    )
  }
)

const Input = styled.input<{ error: boolean }>`
  padding: 0.6rem 1rem;
  background: ${Color.Base};
  border-radius: ${Radius.Px4};
  height: 2.8rem;
  font-size: 16px;
  color: ${TextColor.Black};
  outline: none;
  border: 2px solid
    ${(props) => (props.error ? TextColor.Red : Color.LineLight)};

  ${(props) =>
    !props.error &&
    css`
      :focus {
        border: 2px solid ${Color.Sub};
      }
    `};

  ::placeholder {
    color: ${TextColor.LightGray};
  }

  :focus {
    border: 1px solid ${Color.Sub};
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
    -moz-appearance: textfield;
  }
`
