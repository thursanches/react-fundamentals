import { Header } from "./components/header";
import { Post } from "./Post";

import styles from "./App.module.css";

import { Sidebar } from "./components/Sidebar";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Arthur"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora fuga eum? Nam laborum quaerat voluptates quisquam, nihil est blanditiis id porro? Blanditiis rem, molestiae cum quod est impedit autem!"
          />

          <Post
            author="Sanches"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora fuga eum? Nam laborum quaerat voluptates quisquam, nihil est blanditiis id porro? Blanditiis rem, molestiae cum quod est impedit autem!"
          />
        </main>
      </div>
    </div>
  );
}
