import { FiPlus,FiSearch} from 'react-icons/fi'
import { Container, Brand,Menu,Search,Content,NewNote } from './styles'

import {Header} from '../../components/Header'
import {Input} from '../../components/Input/index'
import {ButtonText} from '../../components/ButtonText'

export function Home(){
  return(
    <Container>
      <Brand>
        <h1>My Notes</h1>
        
        </Brand>
        <Header/>
        <Menu>
          <li><ButtonText title="Todos" isActive /></li>
          <li><ButtonText title="React" /></li>
          <li><ButtonText title="Nodejs"  /></li>
        </Menu> 
        <Search>
       
          <Input placeholder="Pesquisar pelo Titulo" icon={FiSearch} />
        </Search>
        
        <Content>
        </Content>
        <NewNote>
          <FiPlus/>
            Criar nota

        </NewNote>
    </Container>


  );
}