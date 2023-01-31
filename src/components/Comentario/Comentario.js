import React from 'react'
import Comentario from './styled'

export const Comentario = (props) => {
    
    return (
        <Comentario>
            <input placeholder="Adicionar comentario" />
            <button onclick={props.adicionaComentario}>Comentar Post</button>
            <p>{props.post.comentario}</p>
        </Comentario>
    )
}

export default Comentario