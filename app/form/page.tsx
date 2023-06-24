import styles from "./page.module.scss";
import Card from "../components/Card/Card";
import FormSteps from "../components/FormSteps/FormSteps";

export default function Page() {
  return (
    <main className={styles.main}>
      <FormSteps />
      <form className={styles.form}>
        <Card />
      </form>
    </main>
  );
}
