import {Container} from './styles'
import {Tag} from '../Tag'

export function Note ( {data,...rest} ){
  return(
    <Container {...rest}> 
      <h1>{ data.title }</h1>
      {
        data.tags && //renderizar tags caso exista
        <footer>
          {
            data.tags.map(tag=><Tag key={tag.id} title={tag.name}/>
            )}
        </footer>
      }
    </Container>

  )
}

/** 
  export function Note ( {data,...rest} ){
  return(
    <Container {...rest}> 
      <h1>{ data.title }</h1>
      {
        data.tags && //renderizar tags caso exista
        <footer>
          {data.tags.map(tag=>{
            <span key={tag.id}>
                {tag.name}
            </span>
          })}
        </footer>
      }
    </Container>

  )
}
 */