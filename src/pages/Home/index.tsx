import { Header } from '../../components/Header'
import {
  ContentCard,
  ContentWrapper,
  Footer,
  SeparatorText,
  SmallCardsInWrapper,
  Wrapper,
  WrapperContentText,
} from './styles'

import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import imgCoffee from '../../assets/pudim2.png'
import { Card } from '../../components/Card'

export function Home() {
  return (
    <div>
      <Header />
      <Wrapper>
        <ContentWrapper>
          <div>
            <h1>Encontre o Pudim perfeito para qualquer hora do dia</h1>
            <p>
              Com o Pudding Delivery você recebe seu Pudim onde estiver, a
              qualquer hora
            </p>

            <WrapperContentText>
              <SmallCardsInWrapper variant="green">
                <ShoppingCart size={32} weight="fill" />
                <p>Compra simples e segura</p>
              </SmallCardsInWrapper>

              <SmallCardsInWrapper variant="gray">
                <Package size={32} weight="fill" />
                <p>Embalagem mantém o Pudim intacto</p>
              </SmallCardsInWrapper>

              <SmallCardsInWrapper variant="lowgreen">
                <Timer size={32} weight="fill" />
                <p>Entrega rápida e rastreada</p>
              </SmallCardsInWrapper>

              <SmallCardsInWrapper variant="orange">
                <Coffee size={32} weight="fill" />
                <p>O Pudim chega fresquinho até você</p>
              </SmallCardsInWrapper>
            </WrapperContentText>
          </div>
        </ContentWrapper>
        <img src={imgCoffee} alt="" />
      </Wrapper>

      <SeparatorText>
        <h1>Nossos Pudins</h1>
      </SeparatorText>

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

      <Footer>
        <p>
          Feito por{' '}
          <a href="https://4llves.dev/" target="_blank" rel="noreferrer">
            {' '}
            4llves.dev
          </a>
        </p>
      </Footer>
    </div>
  )
}
