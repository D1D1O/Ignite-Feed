import styles from './Comment.module.css';
import {Trash,ThumbsUp} from 'phosphor-react';
import { Avatar } from './Avatar';

export function Comment() {
  return (
    <div className={styles.comment} >
      <Avatar 
        hasBorder={false}
        src="https://github.com/D1D1O.png" />

      <div className={styles.commentBox} >
        <div className={styles.commentContent} >
          <header>
            <div className={styles.authorAndTime} >
              <strong>Giovanny Lima</strong>
              <time
                title='13 de Novembro às 13:45h'
                dateTime="2022-11-13 13:45:30"
              >Cerca de 1h atrás
              </time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>

        </div>
        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
          </button>
        </footer>

      </div>
    </div>
  )
}