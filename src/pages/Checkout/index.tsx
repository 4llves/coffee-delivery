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
            <div className="header-address">
              <MapPinLine />
              <div className="text">
                <h2>Endereço de Entrega</h2>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>

            <div className="grid data-client">
              <Input className="intpu cep" placeholder="Cep" />
              <Input className="intpu name" placeholder="Nome" />
              <Input className="intpu street" placeholder="Rua" />
              <Input className="intpu number" placeholder="Número" />
              <Input
                className="intpu complement"
                placeholder="Complemento (opcional)"
              />
              <Input className="intpu neighborhood" placeholder="Bairro" />
              <Input className="intpu city" placeholder="Cidade" />
              <Input className="intpu uf" placeholder="UF" />
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
