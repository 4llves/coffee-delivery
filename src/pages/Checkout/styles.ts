import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 4.88rem auto;
  gap: 2rem;
`

export const DataClient = styled.section`
  display: flex;
  flex-direction: column;
  width: 40rem;
  justify-content: center;
  align-items: stretch;

  .header-text {
    svg {
      color: white;
      font-size: 1.375rem;
      margin-right: 0.5rem;
    }

    display: flex;
    margin-bottom: 2rem;

    .text {
      display: flex;
      flex-direction: column;

      h2 {
        font-size: 1rem;
        font-weight: 400;
        line-height: 130%; /* 1.3rem */
      }
    }
  }

  .data-client {
    display: flex;
  }

  .data-client {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 0.5fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 20px 20px;
    grid-template-areas:
      'cep . . .'
      'rua rua rua rua'
      'numero numero complemento complemento'
      'bairro cidade cidade uf';
  }
  .cep {
    grid-area: cep;
  }
  .street {
    grid-area: rua;
  }
  .number {
    grid-area: numero;
  }
  .complement {
    grid-area: complemento;
  }
  .neighborhood {
    grid-area: bairro;
  }
  .city {
    grid-area: cidade;
  }
  .uf {
    grid-area: uf;
  }

  .address,
  .payment {
    padding: 2.5rem;
    border-radius: 0.375rem;
    background: ${(props) => props.theme.COLORS.BACKGROUND_HEADER};
  }

  .payment {
    margin-top: 0.75rem;

    .buttons {
      display: flex;
      gap: 0.75rem;

      button {
        display: flex;
        width: 11rem;
        height: 3.18rem;
        align-items: center;
        justify-content: center;
        gap: 0.7rem;
        border-radius: 0.375rem;
        background: ${(props) => props.theme.COLORS.BUTTON};

        color: ${(props) => props.theme.COLORS.CARD};
        font-size: 0.75rem;
        line-height: 160%; /* 1.2rem */
        text-transform: uppercase;

        svg {
          color: ${(props) => props.theme.COLORS.GREEN_800};
          font-size: 1.375rem;
        }
      }
    }
  }
`

export const CartItens = styled.section`
  width: 40rem;
`
