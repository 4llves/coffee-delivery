import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 4.88rem auto;
  gap: 2rem;

  button {
    cursor: pointer;
  }
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
  display: flex;
  width: 28rem;
  height: 31.125rem;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  border-radius: 0.375rem 2.75rem;
  background: ${(props) => props.theme.COLORS.BACKGROUND_HEADER};

  .qt-pedidos {
    display: flex;
    width: 23rem;
    flex-direction: row;
    align-items: flex-start;
    padding: 0.5rem 0.25rem;
    align-self: stretch;

    .content-pedidos {
      display: flex;
      max-width: 10rem;
      flex-wrap: wrap-reverse;
      gap: 0.5rem;
      margin-left: 1.25rem;

      :nth-child(1) {
        height: 2rem;
      }

      h2 {
        color: ${(props) => props.theme.COLORS.INPUT};
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 1.3rem */
      }

      .item {
        /* O flex: 1; é necessário para que cada item se expanda ocupando o tamanho máximo do container. */
        flex: 1;
      }
    }

    strong {
      color: ${(props) => props.theme.COLORS.DEFAULT};
      font-size: 1rem;
      font-weight: 700;
      line-height: 130%; /* 1.3rem */
      margin-left: 3.8rem;
    }

    img {
      width: 4rem;
      height: 4rem;
    }

    button[type='submit'] {
      display: flex;
      height: 2rem;
      width: 5.68rem;
      padding: 0rem 0.5rem;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;
      border-radius: 0.375rem;
      background: ${(props) => props.theme.COLORS.BUTTON};
      border: none;

      color: ${(props) => props.theme.COLORS.CARD};
      font-family: Roboto;
      font-size: 0.7rem;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 1.2rem */
      text-transform: uppercase;

      svg {
        width: 1rem;
        color: ${(props) => props.theme.COLORS.COFFEE_300};
      }
    }
  }

  .footer-cart {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    .total {
      color: ${(props) => props.theme.COLORS.TEXT};
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 130%; /* 1.625rem */
    }

    div {
      display: inherit;
      align-items: center;
      justify-content: space-between;

      p {
        color: ${(props) => props.theme.COLORS.TEXT};
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 1.1375rem */
      }
    }

    button {
      display: flex;
      padding: 0.75rem 0.5rem;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;
      align-self: stretch;
      border-radius: 0.375rem;
      background: ${(props) => props.theme.COLORS.COFFEE_300};
      border: none;

      color: ${(props) => props.theme.COLORS.TITLE};
      font-size: 0.875rem;
      font-weight: 700;
      line-height: 160%; /* 1.4rem */
      text-transform: uppercase;
    }
  }
`
export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: ${(props) => props.theme.COLORS.DEFAULT};
  margin: 1.5rem 0;
`
