import { router } from 'expo-router';
import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { z } from 'zod';

export const PersonalInfoSchema = z.object({
  fullName: z
    .string({ message: 'Full name is required!' })
    .min(1, { message: 'Full name must be longer than 1' }),
  address: z.string().min(1, { message: 'Please provide your address!' }),
  city: z.string().min(1, { message: 'City is required!' }),
  postCode: z.string().min(1, { message: 'Postal code is required!' }),
  phone: z.string().min(1, { message: 'Phone is required!' }),
});

export type PersonalInfo = z.infer<typeof PersonalInfoSchema>;

export const PaymentInfoSchema = z.object({
  cardNumber: z.string().length(16),
  expires: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, 'Utilisez le format MM/YY'),
  cvv: z.coerce.number().min(100).max(999),
});

export type PaymentInfo = z.infer<typeof PaymentInfoSchema>;

type CheckoutFormContext = {
  personalInfo: PersonalInfo | undefined;
  setPersonalInfo: (val: PersonalInfo | undefined) => void;
  paymentInfo: PaymentInfo | undefined;
  setPaymentInfo: (val: PaymentInfo | undefined) => void;
  handleSubmit: () => void;
};

const CheckoutFormContext = createContext<CheckoutFormContext>({
  personalInfo: undefined,
  setPersonalInfo: () => {},
  paymentInfo: undefined,
  setPaymentInfo: () => {},
  handleSubmit: () => {},
});

export default function CheckoutFormProvider({ children }: PropsWithChildren) {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | undefined>();
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | undefined>();

  const handleSubmit = () => {
    if (!personalInfo || !paymentInfo) {
      console.log('Formulaire incomplet');
      return;
    }
    // send it to server

    setPersonalInfo(undefined);
    setPaymentInfo(undefined);

    router.dismissAll();
    router.back();
  };

  return (
    <CheckoutFormContext.Provider
      value={{
        personalInfo,
        setPersonalInfo,
        paymentInfo,
        setPaymentInfo,
        handleSubmit,
      }}
    >
      {children}
    </CheckoutFormContext.Provider>
  );
}

export const useCheckoutForm = () => useContext(CheckoutFormContext);
