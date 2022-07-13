import { ThumbsUp, Trash } from 'phosphor-react';
import Avatar from '../Avatar';
import styles from './Comment.module.css';

export default function Comment({author, publishedAt}) {
  return (
    <div className={styles.comment}>
   <Avatar
 
   src="https://github.com/CaioLucasNS.png"
   alt="avatar" />
    <div className={styles.commentBox}>
      <div className={styles.commentContent}>
      <header>
      <div className={styles.authorAndTime}>
        <strong> Walisson</strong>
        <time title="11 de maio de 2021" dataTime={Date.now()}>
            {" "}
            {publishedAt}
          </time>
      </div>
      <button title="Deletar comt">
        <Trash  size={20}/>
      </button>
      </header>
      <p> Muito bom dev parabéns</p>
      </div>
      <footer>
      <button>
        <ThumbsUp />
        Aplaudir <span> 20 </span>
      </button>
        
      </footer>
    </div>
    
   
    
    
    </div>
  )
}
