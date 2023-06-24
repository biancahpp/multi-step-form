"use client";
import styles from "./form-steps.module.scss";
import FormStep from "./FormStep/FormStep";
import { useFormStore } from "@/store/form-store";

export default function FormSteps() {
  const { form, selectedStep, setSelectedStep } = useFormStore((state) => ({
    form: state.form,
    selectedStep: state.selectedStep,
    setSelectedStep: state.setSelectedStep,
  }));
  return (
    <section className={styles.steps}>
      {form.steps.map((step, index) => (
        <FormStep
          key={step.description}
          step={index + 1}
          selected={step.name === selectedStep.name}
          setSelectedStep={setSelectedStep}
        />
      ))}
    </section>
  );
}
