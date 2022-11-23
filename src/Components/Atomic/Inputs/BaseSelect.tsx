import { Color, Radius, TextColor } from 'styles/Enums'
import styled, { css } from 'styled-components'
import { Property } from 'csstype'
import { ErrorText } from '../ErrorText'
import { forwardRef } from 'react'

interface Props
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
  React.RefAttributes<HTMLSelectElement> {
  placeholder?: string
  width?: Property.Width
  children?: React.ReactNode
  error?: string
}

// eslint-disable-next-line react/display-name
export const BaseSelect: React.FC<Props> = forwardRef(
  ({ placeholder, width, children, error, ...rest }, ref) => {
    return (
      <>
        <Container
          error={error != undefined}
          style={{ width }}
          defaultValue={placeholder}
          {...rest}
          ref={ref}
        >
          {placeholder && (
            <option disabled value={placeholder}>
              {placeholder}
            </option>
          )}
          {children}
        </Container>
        <ErrorText>{error}</ErrorText>
      </>
    )
  }
)

const Container = styled.select<{ error: boolean }>`
  padding: 0.6rem;
  font-size: 16px;
  color: ${TextColor.Black};
  border-radius: ${Radius.Px4};
  border: 2px solid ${Color.LineLight};
  outline: none;

  /* プルダウンのデザインを変更している */
  appearance: none;
  background-image: url(/image/chat/arrow_down_B2B2B2.svg);
  background-repeat: no-repeat;
  background-size: 1.2rem 1rem;
  background-position: right 1rem center;

  :focus {
    outline: none;
    border: 2px solid ${Color.Sub};
  }
  border: 2px solid
    ${(props) => (props.error ? TextColor.Red : Color.LineLight)};

  ${(props) =>
    !props.error &&
    css`
      :focus {
        border: 2px solid ${Color.Sub};
      }
    `};
`
