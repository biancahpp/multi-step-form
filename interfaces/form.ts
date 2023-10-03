export interface FormI {
  steps: FormStepI[];
  thankYou: FormThankYouI;
}

export interface FormStepI {
  name: string;
  description: string;
  title: string;
  subtitle: string;
  textFields?: FormTextFieldI[];
  plans?: {
    yearly: FormPlanI[];
    monthly: FormPlanI[];
  };
  addOns?: {
    yearly: FormAddOnI[];
    monthly: FormAddOnI[];
  };
  priceLabel?: {
    yearly: string;
    monthly: string;
  };
}

export interface FormTextFieldI {
  name: string;
  required: boolean;
  placeholder: string;
  type: string;
}

interface FormPlanI {
  name: string;
  price: string;
  footnote?: string;
}

interface FormAddOnI {
  title: string;
  subtitle: string;
  price: string;
}

interface FormThankYouI {
  title: string;
  subtitle: string;
}
