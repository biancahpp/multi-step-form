import styles from "./form-step.module.scss";

interface Props {
  step: number;
  selected: boolean;
}

export default function FormSteps({ step }: Props) {
  return <button className={styles.step}>{step}</button>;
}
