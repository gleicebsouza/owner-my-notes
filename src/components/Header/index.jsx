import  {RiShutDownLine} from 'react-icons/ri'
import {Container,Profile,Logout} from './styles';
import {Link} from 'react-router-dom';

export function Header(){

  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/gleicebsouza.png"
         alt="foto do usuario"/>
         <div>
          <span>Bem vindo(a),</span>
          <strong>Gleice Souza</strong>
         </div>
      </Profile>
      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container>
  )
}