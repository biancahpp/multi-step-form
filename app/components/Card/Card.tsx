"use client";
import { useFormStore } from "@/store/form-store";
import styles from "./card.module.scss";
import TextInput from "../TextInput/TextInput";

export default function Card() {
  const { selectedStep } = useFormStore((state) => ({
    selectedStep: state.selectedStep,
  }));

  return (
    <section className={styles.card}>
      <h1>{selectedStep.title}</h1>
      <span>{selectedStep.subtitle}</span>
      <div>
        {selectedStep.textFields &&
          selectedStep.textFields.map((field, index) => (
            <TextInput
              field={field}
              isLast={
                selectedStep.textFields &&
                selectedStep.textFields.length - 1 === index
                  ? true
                  : false
              }
            />
          ))}
      </div>
    </section>
  );
}
