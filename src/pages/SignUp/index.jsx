import { FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Background, Container, Form } from './styles';
import { Link } from 'react-router-dom'

export function SignUp(){
  return(
    <Container>
      <Background/>
      <Form>
      <h1>Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>
        
        <h2>Crie sua conta</h2>
        
                
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          />

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

          <Button title="cadastrar"/>
          
          <Link to="/">Voltar para o login</Link>

      </Form>
        
    </Container>

  );
}