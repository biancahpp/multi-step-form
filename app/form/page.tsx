"use client";
import { Form, FormStep } from "@/interfaces/form";
import styles from "./page.module.scss";
import formData from "../../data/data.json";
import FormSteps from "../components/FormSteps/FormSteps";
import { useState } from "react";
import Card from "../components/Card/Card";

export default function Page() {
  const form: Form = formData;
  const [selectedStep, setSelectedStep] = useState(form.steps[0]);

  const updateSelectedStep = (step: number) => {
    setSelectedStep(form.steps[step - 1]);
  };

  return (
    <main className={styles.main}>
      <section className={styles.steps}>
        {form.steps.map((step, index) => (
          <FormSteps
            key={step.description}
            step={index + 1}
            selected={step.name === selectedStep.name}
            setSelectedStep={updateSelectedStep}
          />
        ))}
      </section>
      <section>
        <Card />
      </section>
    </main>
  );
}
