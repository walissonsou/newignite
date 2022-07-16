import React from "react";
import {useState} from 'react';
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import Avatar from "../Avatar";
import Comment from "../Coment/Comment";
import styles from "./Post.module.css";
export default function Post({ author, publishedAt, content }) {

  const [coments,setComents] = useState([])

  const publishedAtFormat = format(publishedAt, "d 'de' LLL 'às' HH:mm'hs'", {
    locale: ptBR,
  });
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateComents = () => {
    event.preventDefault();
    setComents([...coments, coments.length +1])
    
  }

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src={author.avatar_url} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <div>
          <time title={publishedAtFormat} dateTime={publishedAt.toISOString()}>
            {publishedDateRelativeToNow}
          </time>
        </div>
      </header>

      <div className={styles.content}>
        {content.map((item) => {
          if (item.type === "paragraph") {
            return <p key={item.content}> {item.content}</p>;
          } else if (item.type === "link") {
            return (
              <p key={item.content}>
                <a href="#"> {item.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form className={styles.commentForm}>
        <strong> Deixe seu feedback </strong>
        <textarea placeholder="deixe um comentario" />

        <footer>
          <button onClick={handleCreateComents} type="submit"> Publicar </button>
        </footer>
      </form>

      <div className={styles.commentList}>
      {coments.map(comment => {
        return <Comment content={comment} />       
      })}
        
      </div>
    </article>
  );
}
