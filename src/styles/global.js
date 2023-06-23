import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }
  body{
    background-color:${({ theme }) => theme.COLORS.BACKGROUND_700};
    color:${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing:antialiased;//font suave
  }
  body,input,button,textarea{
  font-family: 'Roboto Slab', serif;
  font-size: 16px;
  outline: none;
}

  a{
    text-decoration: none;
  }
  button,a{
    cursor:pointer;
    transition:filter 0.2s;
  }
  button:hoover, a:hover{
    filter: brightness(0.9);
  }

`
