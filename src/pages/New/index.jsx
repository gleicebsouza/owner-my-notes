import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Textearea } from '../../components/Textarea'

import { Container, Form } from './styles'

export function New(){
  return(
    <Container>
      <Header/>
      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <a href="/"></a>
          </header>
          <Input
             placeholder="Titulo"/>
          <Textearea placeholder="Observações"/>
          <Section title="Links úteis">
            <NoteItem value="https://google.com.br"/>
            <NoteItem isNew placeholder="Novo Link"/>
          </Section>
          <Section>
            <div className="tags" >
            <NoteItem value="https://google.com.br"/>
            <NoteItem isNew placeholder="Novo Link"/>
            </div>
          </Section>
          <Button title="Salvar"/>
        </Form>
      </main>
    </Container>

  )
}