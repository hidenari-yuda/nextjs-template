import { TextColor, Color, FontSize, Radius } from 'styles/Enums'
import { Property } from 'csstype'
import { forwardRef, InputHTMLAttributes, useCallback, useState } from 'react'
import styled, { css } from 'styled-components'
import { ErrorText } from '../ErrorText'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
import IconButton from '@mui/material/IconButton'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  inputName: string
  error?: string
  width?: Property.Width
}

// eslint-disable-next-line react/display-name
export const PasswordInput = forwardRef<HTMLInputElement, Props>(
  ({ inputName, error, width, ...rest }, ref) => {
    // Passwordの表示有無
    const [isOpen, setIsOpen] = useState(false)

    // input typeの切り替え
    const changeInputType = useCallback(() => {
      setIsOpen(!isOpen)
      const txtPass = document.getElementById(inputName) as HTMLInputElement

      if (isOpen) {
        txtPass.type = 'password'
      } else {
        txtPass.type = 'text'
      }
    }, [isOpen, inputName])

    return (
      <div style={{ width, position: 'relative' }}>
        <Input
          id={inputName}
          type={'password'}
          error={error != undefined}
          style={{ width }}
          ref={ref}
          {...rest}
        ></Input>
        {isOpen ? (
          <IconButton
            style={{ position: 'absolute', right: '10px' }}
            onClick={() => changeInputType()}
          >
            <VisibilityIcon />
          </IconButton>
        ) : (
          <IconButton
            style={{ position: 'absolute', right: '10px' }}
            onClick={() => changeInputType()}
          >
            <VisibilityOffIcon />
          </IconButton>
        )}
        <ErrorText>{error}</ErrorText>
      </div>
    )
  }
)

const Input = styled.input<{ error: boolean }>`
  padding: 0.5rem 1rem;
  background: ${Color.Base};
  border-radius: ${Radius.Px4};
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
`
