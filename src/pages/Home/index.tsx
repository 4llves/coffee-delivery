import {
  Coffee,
  Package,
  ShoppingCart,
  ShoppingCartSimple,
  Timer,
} from '@phosphor-icons/react'
import { Header } from '../../components/Header'
import {
  CoffeeCard,
  ContentCard,
  ContentWrapper,
  SmallCardsInWrapper,
  Wrapper,
  WrapperContentText,
} from './styles'

import imgCoffeeMilk from '../../assets/cafe-com-leite.png'
import imgCoffee from '../../assets/wrapper-coffee.png'

export function Home() {
  return (
    <div>
      <Header />
      <Wrapper>
        <ContentWrapper>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <WrapperContentText>
              <SmallCardsInWrapper variant="green">
                <ShoppingCart size={32} weight="fill" />
                <p>Compra simples e segura</p>
              </SmallCardsInWrapper>

              <SmallCardsInWrapper variant="gray">
                <Package size={32} weight="fill" />
                <p>Embalagem mantém o café intacto</p>
              </SmallCardsInWrapper>

              <SmallCardsInWrapper variant="lowgreen">
                <Timer size={32} weight="fill" />
                <p>Entrega rápida e rastreada</p>
              </SmallCardsInWrapper>

              <SmallCardsInWrapper variant="orange">
                <Coffee size={32} weight="fill" />
                <p>O café chega fresquinho até você</p>
              </SmallCardsInWrapper>
            </WrapperContentText>
          </div>
        </ContentWrapper>
        <img src={imgCoffee} alt="" />
      </Wrapper>

      <ContentCard>
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

            <strong>- 00 +</strong>

            <ShoppingCartSimple size={38} weight="fill" />
          </div>
        </CoffeeCard>
      </ContentCard>
    </div>
  )
}
