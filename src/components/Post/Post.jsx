import React from "react";
import styles from "./Post.module.css";
export default function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <img
            src="https://avatars.githubusercontent.com/u/88872797?v=4"
            alt=""
            className={styles.avatar}
          ></img>

          <div className={styles.authorInfo}>
            <strong>Desenvolvedor FrontEnd</strong>
            <span>FrontEnd Developer</span>
          </div>
        </div>
        <div>
          <time title="11 de maio de 2021" dataTime={Date.now()}>
            {" "}
            Publicado há 1 hora
          </time>
        </div>
      </header>

      <div className={styles.content}>
        <p>Ele add e comita junta pulando a fase de adicionar </p>

        <p>Outra dica e ver se esta conectado ao repositório </p>

        <p>
          <a href="#">Para testar</a>{' '}
          <a href="#">eh noiss</a> {' '}
          <a href="#">eh noiss</a> {' '}
          <a href="#">eh noiss</a> {' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong> Deixe seu feedback </strong>

        <textarea
          placeholder="deixe um comentario"       
        />

        <footer>
          <button type="submit"> Publicar </button>
        </footer>
      </form>
    </article>
  );
}
