import { setClass } from "@/utils/utils";
import styles from "./form-step.module.scss";

interface Props {
  step: number;
  selected: boolean;
  setSelectedStep: (step: number) => void;
}

export default function FormStep({ step, selected, setSelectedStep }: Props) {
  return (
    <button
      onClick={() => setSelectedStep(step)}
      className={
        selected
          ? setClass([styles.step, styles.selected])
          : setClass([styles.step])
      }
    >
      {step}
    </button>
  );
}
