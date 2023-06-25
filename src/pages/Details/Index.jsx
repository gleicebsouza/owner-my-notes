import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { Container, Links,Content } from "./styles";


export function Details(){
  return(
    <Container>
      <Header/>
      <main>
        <Content>
      <ButtonText title="Excluir Nota" />
      <h1>Introdução ao React</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Corporis omnis distinctio amet iste pariatur iusto, voluptatem ratione.
        Ducimus doloremque neque, inventore facilis
        fugiat quisquam quo, nihil consequuntur enim
        asperiores tenetur!</p>

      <Section title="Links Uteis" >
        <Links>
          <li><a href="#">https://react.dev/</a></li>
          <li><a href="#"></a>https://react.dev/</li>
        </Links>
       </Section>
       <Section title="Marcadores">
        <Tag title="JavaScript" />
        <Tag title="TypeScript" />
        <Tag title="NodeJs" />
        

       </Section>
      <Button title="Voltar"></Button>
      </Content>
      </main>
    </Container>
  )

}