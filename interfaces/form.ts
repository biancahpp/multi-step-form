export interface Form {
    steps: FormStep[];
    thankYou: FormThankYou;
}

interface FormStep {
    name: string;
    description: string;
    title: string;
    subtitle: string;
    textFields?: FormTextField[];
    plans?: {
        yearly: FormPlan[];
        monthly: FormPlan[];
    };
    addOns?: {
        yearly: FormAddOn[];
        monthly: FormAddOn[];
    }
    priceLabel?: {
        yearly: string;
        monthly: string;
    }
}

interface FormTextField {
    name: string;
    required: boolean;
    placeholder: string;
}

interface FormPlan {
    name: string;
    price: string;
    footnote?: string;
}

interface FormAddOn {
    title: string;
    subtitle: string;
    price: string;
}

interface FormThankYou {
    title: string;
    subtitle: string;
}