import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export default function Comment() {
  return (
    <div className={styles.comment}>
    <img src="https://avatars.githubusercontent.com/u/88872797?v=4" alt="" />
    <div className={styles.commentBox}>
      <div className={styles.commentContent}>
      <header>
      <div className={styles.authorAndTime}>
        <strong> Walisson</strong>
        <time title="11 de maio de 2021" dataTime={Date.now()}>
            {" "}
            Cerca de 1 hora atrássssss
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
