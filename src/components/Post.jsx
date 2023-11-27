import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/thursanches.png" />
          <div className={styles.authorInfo}>
            <strong>Arthur</strong>
            <span>Software Developer</span>
          </div>
        </div>

        <time title="16 de Novembro" dataTime="2022-11-16">
          Publicado há 1h atrás.
        </time>
      </header>

      <div className={styles.content}></div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
