import styled from 'styled-components'

import imgBackground from '../../assets/svg-background.svg'

export const Container = styled.main`
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

export const Wrapper = styled.div`
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
