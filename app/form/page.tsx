import styles from "./page.module.scss";

export default function Page() {
    return (
      <main className={styles.main}>
        <div className={styles.header}>
          <h1>Ola</h1>
        </div>
        Hello world
      </main>
    )
  }