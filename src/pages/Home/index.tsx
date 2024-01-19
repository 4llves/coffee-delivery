import { Header } from '../../components/Header'
import {
  ContentCard,
  ContentWrapper,
  SmallCardsInWrapper,
  Wrapper,
  WrapperContentText,
} from './styles'

import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import imgCoffee from '../../assets/wrapper-coffee.png'
import { Card } from '../../components/Card'

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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ContentCard>
    </div>
  )
}
