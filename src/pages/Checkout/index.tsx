import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from '@phosphor-icons/react'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Stepper } from '../../components/Stepper'
import { CartItens, Container, DataClient, Separator } from './styles'

import imgCoffee from '../../assets/cafe-com-leite.png'

export function Checkout() {
  return (
    <div>
      <Header />

      <Container>
        <DataClient>
          <div className="address">
            <div className="header-text">
              <MapPinLine />
              <div className="text">
                <h2>Endereço de Entrega</h2>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>

            <div className="data-client">
              <Input className="cep" placeholder="Cep" />
              <Input className="street" placeholder="Rua" />
              <Input className="number" placeholder="Número" />
              <Input className="complement" placeholder="Complemento" />
              <Input className="neighborhood" placeholder="Bairro" />
              <Input className="city" placeholder="Cidade" />
              <Input className="uf" placeholder="UF" />
            </div>
          </div>

          <div className="payment">
            <div className="header-text">
              <CurrencyDollar />
              <div className="text">
                <h2>Pagamento</h2>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>

            <div className="buttons">
              <button>
                <CreditCard />
                CARTÃO DE CRÉDITO
              </button>
              <button>
                <Bank /> CARTÃO DE DÉBITO
              </button>
              <button>
                <Money /> DINHEIRO
              </button>
            </div>
          </div>
        </DataClient>

        <CartItens>
          <div>
            <div className="qt-pedidos">
              <img src={imgCoffee} alt="" />
              <div className="content-pedidos">
                <Stepper className="item" />
                <button className="item" type="submit">
                  <Trash /> REMOVER
                </button>
                <h2 className="item">Expresso Tradicional</h2>
              </div>
              <strong>R$ 9,90</strong>
            </div>

            <Separator />

            <div className="qt-pedidos">
              <img src={imgCoffee} alt="" />
              <div className="content-pedidos">
                <Stepper className="item" />
                <button className="item" type="submit">
                  <Trash /> REMOVER
                </button>
                <h2 className="item">Expresso Tradicional</h2>
              </div>

              <strong>R$ 9,90</strong>
            </div>

            <Separator />

            <div className="footer-cart">
              <div>
                <p>Total de Itens: </p>
                <strong>R$ 29,70</strong>
              </div>
              <div>
                <p>Entrega: </p>
                <strong>R$ 3,50</strong>
              </div>
              <div className="total">
                <h2>Total: </h2>
                <strong>R$ 33,20</strong>
              </div>

              <button>CONFIRMAR PEDIDO</button>
            </div>
          </div>
        </CartItens>
      </Container>
    </div>
  )
}
