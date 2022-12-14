import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
export function Post() {
  return (
    <article className={styles.post} >
      <header>
        <div className={styles.author} >
          <Avatar src="https://github.com/D1D1O.png" />
          <div className={styles.authorInfo} >
            <strong>Giovanny Lima</strong>
            <span>Web Develop</span>
          </div>
        </div>

        <time
          title='13 de Novembro às 13:45h'
          dateTime="2022-11-13 13:45:30"
        >Publicado há 1h
        </time>
      </header>

      <div className={styles.content} >
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href="#">jane.design/doctorcare</a> </p>

        <p>
          <a href="#">#novoprojeto</a> {' '}
          <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm} action="">
        <strong>Deixe seu comentario</strong>
        <textarea 
          placeholder="Deixe um comentário"
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
      <div className={styles.commnetList} >
        <Comment/>
        <Comment/>
        <Comment/>
      </div>

    </article>
  )
}