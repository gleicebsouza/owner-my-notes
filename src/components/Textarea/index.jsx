import {Container} from './styles'

export function Textearea({value,...rest}){
  return(
    <Container {...rest}
    >
      {value}
    </Container>
  )

}