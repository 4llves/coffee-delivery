import { Minus, Plus } from '@phosphor-icons/react'
import { StepperButton, StepperContainer } from './styles'

interface StepperButton {
  className?: string
}

export function Stepper({ className }: StepperButton) {
  return (
    <StepperContainer className={className}>
      <StepperButton>
        <Minus weight="bold" />
      </StepperButton>
      <p>10</p>
      <StepperButton>
        <Plus weight="bold" />
      </StepperButton>
    </StepperContainer>
  )
}
