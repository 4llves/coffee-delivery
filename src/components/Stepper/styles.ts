import styled from 'styled-components'

export const StepperContainer = styled.div`
  width: 4.5rem;
  display: flex;
  padding: 0.5rem;
  background: ${(props) => props.theme.COLORS.BUTTON};
  border-radius: 6px;
  align-items: center;
  justify-content: space-between;

  p {
    color: ${(props) => props.theme.COLORS.CARD};
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%; /* 1.3rem */
  }
`
export const StepperButton = styled.button`
  cursor: pointer;
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.COLORS.BUTTON};

  &:focus {
    outline: none;
    box-shadow: none;
  }

  svg {
    color: ${(props) => props.theme.COLORS.COFFEE_300};
    font-size: 14px;
  }
`
