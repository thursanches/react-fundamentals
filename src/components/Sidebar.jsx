import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/66748313?v=4"
          alt=""
        />

        <strong>Arthur Sanches</strong>
        <span>Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine />
          Editar seu perfil.
        </a>
      </footer>
    </aside>
  );
}
