import React from "react";
import { PostContainer } from "./styled";
import { Comentario } from "../Comentario/Comentario";


export const Post = (props) => {
  // console.log(props.alteraCurtida);
  console.log(props.post);
  return (
    <PostContainer className={"post-container"}>
      <p>{props.post.texto}</p>
      <button onClick={() => props.alteraCurtida()}>{props.post.curtido ? "Descurtir" : "Curtir"}</button>
      <button onClick={() => props.apagarPost()}>Apagar</button>
      
      {
        <Comentario
          comentario={props.comentario}
          adicionaComentario={props.adicionaComentario}
          comentarioDoPost={post.comentario}
        /> 
      }
    </PostContainer>
  );
};

export default Post;
