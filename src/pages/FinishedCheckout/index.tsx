import {
  CurrencyCircleDollar,
  PushPinSimple,
  Timer,
} from '@phosphor-icons/react'
import { Header } from '../../components/Header'
import { Container, Section } from './styles'

import imgScooter from '../../assets/scooter.png'

export function FinishedCheckout() {
  return (
    <div>
      <Header />

      <Container>
        <Section>
          <div className="head-text">
            <h1>Uhu! Pedido confirmado 👌</h1>
            <p>Agora é só aguardar que logo o café chegará até você</p>
          </div>

          <div className="cards">
            <div className="mini-card">
              <PushPinSimple size={32} color="#06f770" weight="duotone" />
              <p>
                Entrega em:{' '}
                <span>
                  Rua João Daniel Martinelli, 102 - Farrapos - Porto Alegre, RS
                </span>
              </p>
            </div>

            <div className="mini-card">
              <Timer size={32} color="#06f770" weight="duotone" />
              <p>
                Previsão de entrega <br />
                <span>20 min - 30 min</span>
              </p>
            </div>

            <div className="mini-card">
              <CurrencyCircleDollar
                size={32}
                color="#06f770"
                weight="duotone"
              />
              <p>
                Pagamento na entrega <br />
                <span>Cartão de Crédito</span>
              </p>
            </div>
          </div>
        </Section>
        <Section>
          <img src={imgScooter} alt="" />
        </Section>
      </Container>
    </div>
  )
}
