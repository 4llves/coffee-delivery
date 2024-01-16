import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${(props) => props.theme.COLORS.BACKGROUND_HEADER};

  nav {
    width: 100%;
    padding: 2rem 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      gap: 0.75rem;
    }
  }
`

export const ButtonHeader = styled.button`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border: none;
  border-radius: 6px;

  cursor: pointer;

  background: ${(props) => props.theme.COLORS.COFFEE_100};
  color: ${(props) => props.theme.COLORS.COFFEE_300};

  svg:nth-child(2) {
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    border-radius: 6px;
  }

  p {
    font-family: Roboto;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
  }
`
