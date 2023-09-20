import styled from 'styled-components'

export const Container = styled.button`
  font-size: 16px;
  background: none;
  color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.PINK_800 : theme.COLORS.GRAY_100};
  border: none;
`
