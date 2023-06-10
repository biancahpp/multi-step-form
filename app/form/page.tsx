import { Form } from "@/interfaces/form";
import styles from "./page.module.scss";
import test from "../../data/data.json";
import FormSteps from "../components/FormSteps/FormSteps";

export default function Page() {
  const form: Form = test;

  return (
    <main className={styles.main}>
      <section className={styles.steps}>
        {form.steps.map((step, index) => (
          <FormSteps key={step.description} step={index + 1} selected={true} />
        ))}
      </section>
    </main>
  );
}
