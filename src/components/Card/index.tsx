import { ShoppingCartSimple } from '@phosphor-icons/react'
import { CoffeeCard } from './styles'

import imgCoffeeMilk from '../../assets/puddingchocolatesemfundo.png'
import { Stepper } from '../Stepper'

export function Card() {
  return (
    <CoffeeCard>
      <img src={imgCoffeeMilk} alt="" />

      <div className="type-coffee">
        <span data-content="tradicional">tradicional</span>
        <span data-content="chocolate">com leite</span>
      </div>

      <div className="text-content">
        <h2>Pudim de Chocolate</h2>

        <p>Meio a meio de expresso tradicional com leite vaporizado</p>
      </div>

      <div className="card-footer">
        <span>R$ 9,90</span>

        <Stepper />

        <ShoppingCartSimple size={38} weight="fill" />
      </div>
    </CoffeeCard>
  )
}
