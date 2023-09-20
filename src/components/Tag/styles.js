import styled from 'styled-components'

export const Container = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  background-color: ${({ theme }) => theme.COLORS.PINK_800};

  padding: 5px 14px;
  border-radius: 5px;
  margin-right: 6px;
`
