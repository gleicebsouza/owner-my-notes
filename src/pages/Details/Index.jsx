import {Container,Links } from "./styles";
import {Header} from '../../components/Header'
import {Button} from '../../components/Button'
import {Section} from '../../components/Section'


export function Details(){
  return(
    <Container>
      <Header/>
      <Section title="Links Uteis" >
        <Links>
          <li><a href="#">https://react.dev/</a></li>
          <li><a href="#"></a>https://react.dev/</li>
          <li><a href="#"></a>https://react.dev/</li>
        </Links>
       </Section>
      <Button title="Voltar"></Button>
    </Container>
  )

}