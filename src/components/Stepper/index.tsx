import { Minus, Plus } from '@phosphor-icons/react'
import { useState } from 'react'
import { StepperButton, StepperContainer } from './styles'

interface StepperButton {
  className?: string
}

export function Stepper({ className }: StepperButton) {
  const [value, setValue] = useState<number>(0)

  const formatValue = (value: number): string => {
    return value.toString().padStart(2, '0')
  }

  const valueIncrement = () => {
    setValue((value) => value + 1)
  }

  const valueDecrement = () => {
    setValue((value) => (value > 0 ? value - 1 : 0))
  }

  return (
    <StepperContainer className={className}>
      <StepperButton>
        <Minus weight="bold" onClick={valueDecrement} />
      </StepperButton>
      <p>{formatValue(value)}</p>
      <StepperButton>
        <Plus weight="bold" onClick={valueIncrement} />
      </StepperButton>
    </StepperContainer>
  )
}
