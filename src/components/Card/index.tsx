import { ShoppingCartSimple } from '@phosphor-icons/react'
import { CoffeeCard } from './styles'

// import imgCoffeeMilk from '../../assets/puddingchocolatesemfundo.png'
import { Stepper } from '../Stepper'

type CardProps = {
  name: string
  type: string
  description: string
  img: string
}

export function Card({ name, type, description, img }: CardProps) {
  return (
    <CoffeeCard>
      <img src={img} alt="" />

      <div className="type-coffee">
        <span data-content={type}>{type}</span>
      </div>

      <div className="text-content">
        <h2>{name}</h2>

        <p>{description}</p>
      </div>

      <div className="card-footer">
        <span>R$ 9,90</span>

        <Stepper />

        <ShoppingCartSimple size={38} weight="fill" />
      </div>
    </CoffeeCard>
  )
}
