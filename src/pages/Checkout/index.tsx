import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from '@phosphor-icons/react'
import { Header } from '../../components/Header'
import { Stepper } from '../../components/Stepper'
import { CartItens, Container, DataClient } from './styles'

export function Checkout() {
  return (
    <div>
      <Header />

      <Container>
        <DataClient>
          <div className="address">
            <div className="header-address">
              <MapPinLine size={32} />
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>

            <div className="data-client">
              <input type="text" placeholder="CEP" />
              <input type="text" placeholder="Rua" />
              <input type="text" placeholder="Número" />
              <input
                type="text"
                placeholder="Complemento...............Opcional"
              />
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </div>
          </div>

          <div className="payment">
            <div>
              <CurrencyDollar size={32} />
              <h2>Pagamento</h2>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>

            <div>
              <button>
                <CreditCard size={32} />
                CARTÃO DE CRÉDITO
              </button>
              <button>
                <Bank size={32} /> CARTÃO DE DÉBITO
              </button>
              <button>
                <Money size={32} /> DINHEIRO
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
