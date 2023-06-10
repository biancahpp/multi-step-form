import { Form } from "@/interfaces/form";
import styles from "./page.module.scss";
import test from "../../data/data.json"

export default function Page() {
  const form: Form = test;

    return (
      <main className={styles.main}>
        {form.steps.length}
      </main>
    )
  }