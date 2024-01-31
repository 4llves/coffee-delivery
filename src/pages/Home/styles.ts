import styled from 'styled-components'

import imgBackground from '../../assets/svg-background.svg'

export const Wrapper = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline: auto;
  background: url(${imgBackground}) center/cover no-repeat;

  img {
    width: 28rem;
    margin-left: 5rem;
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
  width: 1120px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  align-items: center;
  justify-content: center;
  margin-inline: auto;
`

export const SeparatorText = styled.div`
  width: 1120px;
  margin: 2rem auto 3.38rem auto;

  h1 {
    color: ${(props) => props.theme.COLORS.TEXT};
    font-family: ${(props) => props.theme.FONT.TITLE};
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%; /* 2.6rem */
  }
`

export const Footer = styled.footer`
  display: flex;
  width: 1120px;
  height: 64px;
  align-items: center;
  justify-content: center;
  margin-inline: auto;

  p {
    color: ${(props) => props.theme.COLORS.TITLE};

    a {
      text-decoration: underline;
      color: ${(props) => props.theme.COLORS.COFFEE_300};
    }
  }
`
