import { TextColor, Color, FontSize, Radius } from 'styles/Enums'
import { Property } from 'csstype'
import { forwardRef, InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { ErrorText } from '../ErrorText'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  width?: Property.Width
  unit: string
}

// eslint-disable-next-line react/display-name
export const UnitInput = forwardRef<HTMLInputElement, Props>(
  ({ error, width, unit, ...rest }, ref) => {
    return (
      <>
        <InputBlock>
          <Input
            error={error != undefined}
            style={{ width }}
            ref={ref}
            {...rest}
          />
          <Unit error={error != undefined}>{unit}</Unit>
        </InputBlock>
        <ErrorText>{error}</ErrorText>
      </>
    )
  }
)

const InputBlock = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
`

const Input = styled.input<{ error: boolean }>`
  padding: 0.5rem 1rem;
  background: ${Color.Base};
  border-radius: ${Radius.Px4} 0 0 ${Radius.Px4};
  height: 2.5rem;
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
    font-size: ${FontSize.Px14};
  }

  :focus {
    border: 1px solid ${Color.Sub};
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`

const Unit = styled.span<{ error: boolean }>`
  display: flex;
  padding: 0.5rem 0.5rem;
  font-size: 14px;
  color: ${TextColor.Black};
  background-color: #efefef;
  height: 2.5rem;
  border-top: 2px solid
    ${(props) => (props.error ? TextColor.Red : Color.LineLight)};
  border-radius: 0 ${Radius.Px4} ${Radius.Px4} 0;
  border-right: 2px solid
    ${(props) => (props.error ? TextColor.Red : Color.LineLight)};
  border-radius: 0 ${Radius.Px4} ${Radius.Px4} 0;
  border-bottom: 2px solid
    ${(props) => (props.error ? TextColor.Red : Color.LineLight)};
  border-radius: 0 ${Radius.Px4} ${Radius.Px4} 0;
`
