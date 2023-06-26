import { Container } from './styles';

/* *Converter icon for Icon
*Condição caso encontre icone:  {Icon && <Icon size={20} />}*/
export function Input({ icon:Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  )
}
// { Icon && <Icon size={20} />}