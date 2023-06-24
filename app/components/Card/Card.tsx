"use client";
import { useFormStore } from "@/store/form-store";
import styles from "./card.module.scss";

export default function Card() {
  const { selectedStep, setSelectedStep } = useFormStore((state) => ({
    selectedStep: state.selectedStep,
    setSelectedStep: state.setSelectedStep,
  }));

  return (
    <div className={styles.card}>
      <h1>{selectedStep.title}</h1>pipo
      <span>{selectedStep.subtitle}</span>
      <div>
        {selectedStep.textFields &&
          selectedStep.textFields.map((field) => (
            <>
              <label htmlFor={field.name}>{field.name}</label>
              <input type={field.type} id={field.name} name={field.name} />
            </>
          ))}
      </div>
    </div>
  );
}
