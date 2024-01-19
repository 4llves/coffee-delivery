import styled from 'styled-components'

import imgBackground from '../../assets/svg-background.svg'

export const Wrapper = styled.main`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline: auto;
  background: url(${imgBackground}) center/cover no-repeat;

  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34rem;
  width: 36.75rem;

  h1 {
    font-size: 3rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    font-family: ${(props) => props.theme.FONT.TITLE};
    color: ${(props) => props.theme.COLORS.TEXT};
  }

  p {
    color: ${(props) => props.theme.COLORS.TEXT};
    font-family: Roboto;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 1.625rem */
  }
`

export const WrapperContentText = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 4.12rem;
  /* gap: 1.25rem; */
`

interface colorBackgroundIcon {
  variant: 'green' | 'gray' | 'lowgreen' | 'orange'
}

export const SmallCardsInWrapper = styled.div<colorBackgroundIcon>`
  display: flex;
  align-items: center;
  gap: 12px;

  &:nth-child(n + 3) {
    margin-top: 1.25rem;
  }

  p {
    color: ${(props) => props.theme.COLORS.TEXT};
    font-family: Roboto;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  svg {
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 62.5rem;

    background: ${(props) => {
      switch (props.variant) {
        case 'green':
          return props.theme.COLORS.GREEN_800
        case 'gray':
          return props.theme.COLORS.LABEL
        case 'lowgreen':
          return props.theme.COLORS.GREEN_200
        case 'orange':
          return props.theme.COLORS.COFFEE_300
        default:
          return '#FFF'
      }
    }};
  }
`
export const ContentCard = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  margin-inline: auto;
`

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

  .card-footer {
    display: flex;
    width: 13.5rem;
    margin: 2.06rem auto;
    justify-content: center;
    align-items: center;

    :nth-child(1) {
      margin-right: 1.25rem;
    }

    span {
      color: ${(props) => props.theme.COLORS.TITLE};
      font-family: ${(props) => props.theme.FONT.TITLE};
      font-size: 1.5rem;
      font-weight: 800;
      line-height: 130%;
    }

    strong {
      display: flex;
      height: 2.375rem;
      padding: 0.5rem;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;
      border-radius: 0.375rem;
      background: ${(props) => props.theme.COLORS.BUTTON};
    }

    svg {
      display: flex;
      padding: 0.5rem;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      margin-left: 0.5rem;
      border-radius: 6px;
      background: ${(props) => props.theme.COLORS.COFFEE_600};
    }
  }
`
