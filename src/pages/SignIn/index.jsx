import {Container,Form,Background}  from './styles'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import {FiMail,FiLock} from 'react-icons/fi'

export function SignIn(){
  return(
    <Container>
      <Form>
      <h1>Notes</h1>
        <p>Aplicação para salvar e gerencias seus links úteis</p>
        
        <h2>Faça seu Login</h2>
        
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          />
        <Input
          placeholder="senha"
          type="password"
          icon={FiLock}
          />

          <Button title="Entrar"/>
          
          <a href="#">Criar conta</a>

      </Form>
          <Background/>
    </Container>

  );
}