import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/thursanches.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Arthur Sanches</strong>
              <time title="16 de Novembro" dataTime="2022-11-16">
                Publicado há 1h atrás.
              </time>
            </div>

            <button title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, sucesso!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>18</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
