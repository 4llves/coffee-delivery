import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { Header } from '../../components/Header'
import { Container, Wrapper } from './styles'

import imgCoffee from '../../assets/wrapper-coffee.png'

export function Home() {
  return (
    <div>
      <Header />
      <Container>
        <Wrapper>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <div>
              <ShoppingCart size={32} />
              <div>Compra simples e segura</div>
            </div>

            <div>
              <Package size={32} />
              <div>Embalagem mantém o café intacto</div>
            </div>

            <div>
              <Timer size={32} />
              <div>Entrega rápida e rastreada</div>
            </div>

            <div>
              <Coffee size={32} />
              <div>O café chega fresquinho até você</div>
            </div>
          </div>
        </Wrapper>

        <img src={imgCoffee} alt="" />
      </Container>
    </div>
  )
}
