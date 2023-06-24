import { FormI, FormStepI } from '@/interfaces/form'
import { create } from 'zustand'
import formData from "../data/data.json";

interface FormStoreI {
    form: FormI;
    selectedStep: FormStepI;
    setSelectedStep: (step: number) => void;
}

export const useFormStore = create<FormStoreI>((set) => ({
  form: formData,
  selectedStep: formData.steps[0],
  setSelectedStep: (step: number) => set(() => ({ selectedStep: formData.steps[step - 1] })),
}))