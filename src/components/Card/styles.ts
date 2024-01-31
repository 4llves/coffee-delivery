import styled from 'styled-components'

export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;

  width: 16rem;
  height: 19.375rem;
  flex-shrink: 0;

  border-radius: 0.375rem 2.25rem;
  background: ${(props) => props.theme.COLORS.CARD};

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin: -1.25rem auto 1px;
    background: ${(props) => props.theme.COLORS.CARD};
    border: 1px solid ${(props) => props.theme.COLORS.COFFEE_100};
    border-radius: 50%;
  }

  .type-coffee {
    display: flex;
    gap: 0.25rem;
    margin: 0.5rem auto;
    text-transform: uppercase;

    span {
      /* Components/Tag */
      font-family: Roboto;
      font-size: 0.625rem;
      font-style: normal;
      font-weight: 700;
      line-height: 130%; /* 0.8125rem */
      color: ${(props) => props.theme.COLORS.GREEN_800};

      border-radius: 6.25rem;
      padding: 0.25rem 0.5rem;
      justify-content: center;
      align-items: center;
      background: ${(props) => props.theme.COLORS.GREEN_100};
    }

    span[data-content='tradicional'],
    span[data-content='especial'] {
      color: ${(props) => props.theme.COLORS.COFFEE_300};
      background: ${(props) => props.theme.COLORS.COFFEE_100};
    }
  }

  .text-content {
    h2 {
      width: 13.5rem;
      color: ${(props) => props.theme.COLORS.TEXT};
      text-align: center;
      font-family: ${(props) => props.theme.FONT.TITLE};
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 700;
      line-height: 130%; /* 1.625rem */
      margin: 1rem auto 0.5rem;
    }

    p {
      width: 13.5rem;
      color: ${(props) => props.theme.COLORS.HOVER};
      text-align: center;
      font-family: ${(props) => props.theme.FONT.TEXT};
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 1.1375rem */
      margin-inline: auto;
    }
  }

  .card-footer {
    width: 100%;
    display: flex;
    margin: 2.06rem auto;
    align-items: center;
    justify-content: center;

    span {
      color: ${(props) => props.theme.COLORS.TITLE};
      font-family: ${(props) => props.theme.FONT.TITLE};
      font-size: 1.5rem;
      font-weight: 800;
      line-height: 130%;
      margin-right: 1.44rem;
    }

    svg:nth-child(3) {
      display: flex;
      padding: 0.5rem;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;
      margin-left: 0.5rem;
      border-radius: 6px;
      background: ${(props) => props.theme.COLORS.COFFEE_600};

      cursor: pointer;
    }
  }
`
