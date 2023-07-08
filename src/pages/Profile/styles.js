import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 144%;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    padding: 0 124px;

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 24px;
    }
  }
`
export const Form = styled.form`
  max-width: 340px;
  margin:30px auto 0;
`
