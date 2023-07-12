import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import {Container,Form,Avatar} from './styles'
import { FiArrowLeft,FiLock,FiMail,FiUser,FiCamera} from 'react-icons/fi'

export function Profile(){
  return(
    <Container>
      <header>

        <a href="/">
          <FiArrowLeft/>
        </a>
   
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/gleicebsouza.png" alt="Foto Usuário" />

          <label htmlFor="avatar" >
            <FiCamera/>

            <input
              id="avatar"
              type="file"
              />
          </label>
        </Avatar>
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
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />
        <Input
          placeholder="Nova Senha"
          type="password"
          icon={FiLock}
        />
      <Button title="Salvar"/>

      </Form>
   
    </Container>
  )

}