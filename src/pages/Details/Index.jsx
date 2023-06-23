import {Container } from "./styles";
import {Header} from '../../components/Header'
import {Button} from '../../components/Button'


export function Details(){
  return(
    <Container>
      <Header/>
      <span>Nome</span>
      <Button title="Voltar"></Button>
    </Container>
  )

}