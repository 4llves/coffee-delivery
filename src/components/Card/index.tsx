import { ShoppingCartSimple } from '@phosphor-icons/react'
import { CoffeeCard } from './styles'

import imgCoffeeMilk from '../../assets/cafe-com-leite.png'
import { Stepper } from '../Stepper'

export function Card() {
  return (
    <CoffeeCard>
      <img src={imgCoffeeMilk} alt="" />

      <div className="type-coffee">
        <span data-content="tradicional">tradicional</span>
        <span data-content="com leite">com leite</span>
      </div>

      <h2>Café com Leite</h2>

      <p>Meio a meio de expresso tradicional com leite vaporizado</p>

      <div className="card-footer">
        <span>R$ 9,90</span>

        <Stepper />

        <ShoppingCartSimple size={38} weight="fill" />
      </div>
    </CoffeeCard>
  )
}
