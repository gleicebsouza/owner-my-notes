import styled from 'styled-components'
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  display: flex;
  align-items: stretch;

  height: 100vh;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 0 136px;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK_800};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }
  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  > a {
    margin-top: 124px;
    color: ${({ theme }) => theme.COLORS.PINK_800};
  }
`
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`
