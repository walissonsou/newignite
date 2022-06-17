import React from 'react'
import styles from './Post.module.css'
export default function Post() {
  return (
    <article className={styles.post}>
       <header>
        <div className={styles.author}>
        <img  src="https://avatars.githubusercontent.com/u/88872797?v=4" alt="" className={styles.avatar}></img>
        
        <div className={styles.authorInfo}>
        <strong>Desenvolvedor FrontEnd</strong>
        <span>FrontEnd Developer</span>
        </div>
        </div>
        <div>
        <time> Publicado há 1 hora </time>
        </div>
       </header>
    </article>
  )
}
