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
import { CartItens, Container, DataClient } from './styles'

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
            <div>
              <img src="" alt="" />
              <h2>Expresso Tradicional</h2>
              <p>R$ 9,90</p>
              <Stepper />
              <button>
                <Trash size={32} /> REMOVER
              </button>
            </div>

            <div>
              <img src="" alt="" />
              <h2>Expresso Tradicional</h2>
              <p>R$ 9,90</p>
              <Stepper />
              <button>
                <Trash size={32} /> REMOVER
              </button>
            </div>

            <p>Total de Itens: R$29,70</p>
            <p>Entrega: R$ 3,50</p>
            <strong>Total: R$ 33,20</strong>

            <button>CONFIRMAR PEDIDO</button>
          </div>
        </CartItens>
      </Container>
    </div>
  )
}
