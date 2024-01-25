import React, { InputHTMLAttributes } from 'react'
import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: React.ComponentType
  className?: string
}

export function Input({ Icon, className, ...rest }: InputProps) {
  return (
    <Container className={className}>
      {Icon && <Icon />}
      <input {...rest} />
    </Container>
  )
}
