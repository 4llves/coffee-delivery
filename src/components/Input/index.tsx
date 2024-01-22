import React, { InputHTMLAttributes } from 'react'
import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: React.ComponentType
}

export function Input({ Icon, ...rest }: InputProps) {
  return (
    <Container>
      {Icon && <Icon />}
      <input {...rest} />
    </Container>
  )
}
