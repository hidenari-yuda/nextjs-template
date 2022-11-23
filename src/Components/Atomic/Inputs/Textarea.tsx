import styled, { css } from 'styled-components'
import { Radius, Color, TextColor } from 'styles/Enums'
import React, { forwardRef, TextareaHTMLAttributes } from 'react'
import { ErrorText } from '../ErrorText'
import { Property } from 'csstype'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  width?: Property.Width
  rows: number
  error?: string
}

// eslint-disable-next-line react/display-name
export const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ width, rows, error, ...rest }, ref) => {
    return (
      <>
        <Content
          style={{ width }}
          rows={rows}
          error={error != undefined}
          ref={ref}
          {...rest}
        />
        <ErrorText>{error}</ErrorText>
      </>
    )
  }
)

const Content = styled.textarea<{ error: boolean }>`
  padding: 0.8rem;
  border-radius: ${Radius.Px4};

  font-size: 16px;
  color: ${TextColor.Black};
  outline: none;
  resize: vertical;
  min-height: ${(props) => props.style?.height};
  border: 2px solid
    ${(props) => (props.error ? TextColor.Red : Color.LineLight)};

  ${(props) =>
    !props.error &&
    css`
      :focus {
        border: 1px solid ${Color.Sub};
      }
    `};
`
