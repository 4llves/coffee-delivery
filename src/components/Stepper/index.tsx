import { Minus, Plus } from '@phosphor-icons/react'
import { StepperButton, StepperContainer } from './styles'

export function Stepper() {
  return (
    <StepperContainer>
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
