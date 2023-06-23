import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas:
    'brand header'
    'menu search'
    'menu content'
    'newnote content';

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`

export const Brand = styled.div`
  grid-area: brand;
  background-color: red;
`

export const Menu = styled.ul`
  grid-area: brand;
  background-color: yellow;
`

export const Search = styled.div`
  grid-area: brand;
  background-color: green;
`

export const Content = styled.div`
  grid-area: brand;
  background-color: blue;
`

export const NewNote = styled.div`
  grid-area: brand;
  background-color: violet;
`
