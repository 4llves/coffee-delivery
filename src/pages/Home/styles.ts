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
          return props.theme.COLORS.GREEN
        case 'gray':
          return props.theme.COLORS.LABEL
        case 'lowgreen':
          return props.theme.COLORS.LOW_GREEN
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
`
