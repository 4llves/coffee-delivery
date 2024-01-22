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

  .header-address {
    svg {
      color: #327555;
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

  .address,
  .payment {
    padding: 2.5rem;
    border-radius: 0.375rem;
    background: ${(props) => props.theme.COLORS.BACKGROUND_HEADER};
  }

  .payment {
    margin-top: 0.75rem;
  }
`

export const CartItens = styled.section`
  width: 40rem;
`
