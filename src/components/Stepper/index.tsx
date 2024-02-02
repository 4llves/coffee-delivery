import { Minus, Plus } from '@phosphor-icons/react'
import { StepperButton, StepperContainer } from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../Stock/Stock.store'
import { RootState } from '../../Stock/intex'

interface StepperButton {
  className?: string
}

export function Stepper({ className }: StepperButton) {
  const dispatch = useDispatch()
  const stock = useSelector((state: RootState) => state.stock)

  const formatValue = (value: number): string => {
    return value.toString().padStart(2, '0')
  }

  return (
    <StepperContainer className={className}>
      <StepperButton>
        <Minus weight="bold" onClick={() => dispatch(decrement())} />
      </StepperButton>
      <p>{formatValue(stock.counter)}</p>
      <StepperButton>
        <Plus weight="bold" onClick={() => dispatch(increment())} />
      </StepperButton>
    </StepperContainer>
  )
}
