import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 2.625rem;
  align-items: center;
  gap: 0.25rem;
  border-radius: 0.25rem;

  input {
    height: 2.625rem;
    border-radius: 0.25rem;
    width: 100%;
    padding: 0.75rem;
    border: 1px solid ${(props) => props.theme.COLORS.BUTTON};
    background: ${(props) => props.theme.COLORS.INPUT};

    color: ${(props) => props.theme.COLORS.LABEL};
    font-family: Roboto;
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%; /* 1.1375rem */
  }
`
