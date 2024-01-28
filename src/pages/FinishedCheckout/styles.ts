import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  width: 1120px;
  justify-content: center;
  align-items: center;
  margin-inline: auto;
  gap: 6.38rem;
  margin-top: 5rem;
`

export const Section = styled.section`
  width: 100%;

  .head-text {
    h1 {
      color: ${(props) => props.theme.COLORS.GREEN_LIGHT};
      font-family: ${(props) => props.theme.FONT.TITLE};
      font-size: 2rem;
      font-style: normal;
      font-weight: 800;
      line-height: 130%; /* 2.6rem */
    }

    p {
      color: ${(props) => props.theme.COLORS.TITLE};
      font-size: 1.25rem;
      line-height: 130%; /* 1.625rem */
      margin-bottom: 2.5rem;
    }
  }

  .cards {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .mini-card {
      max-width: 25rem;
      height: 2.6rem;
      display: grid;
      grid-template-columns: 2rem 1fr;
      align-items: center;
      gap: 0.75rem;
      background: rgba(89, 79, 71, 0.2);
      border-radius: 6px;
      padding: 0.5rem;
      box-sizing: content-box;

      p {
        color: ${(props) => props.theme.COLORS.TITLE};
        font-family: Roboto;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 1.3rem */
      }

      span {
        font-weight: 700;
      }
    }
  }

  img {
    display: flex;
    margin-top: 3.63rem;
  }
`
