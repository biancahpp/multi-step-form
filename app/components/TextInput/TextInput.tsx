import { FormTextFieldI } from "@/interfaces/form";
import styles from "./text-input.module.scss";

interface Props {
  field: FormTextFieldI;
  isLast: boolean;
}

export default function TextInput({ field, isLast }: Props) {
  return (
    <>
      <label htmlFor={field.name} className={styles.label}>
        {field.name}
      </label>
      <input
        type={field.type}
        id={field.name}
        name={field.name}
        placeholder={field.placeholder}
        className={`${styles.input} ${isLast ? styles.isLast : ""}`}
      />
    </>
  );
}
