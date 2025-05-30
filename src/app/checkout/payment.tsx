import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { router } from 'expo-router';
import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView';
import * as z from 'zod';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import CustomTextInput from '../../components/CustomTextInput';
import {
  PaymentInfo,
  PaymentInfoSchema,
  useCheckoutForm,
} from '../../contexts/CheckoutFormProvider';

export default function PaymentDetailsForm() {
  const { paymentInfo, setPaymentInfo } = useCheckoutForm();

  const form = useForm<PaymentInfo>({
    resolver: zodResolver(PaymentInfoSchema),
    defaultValues: paymentInfo,
  });

  const handleNext: SubmitHandler<PaymentInfo> = (data) => {
    // validate form
    setPaymentInfo(data);
    // redirect
    router.push('/checkout/confirm');
  };

  return (
    <KeyboardAwareScrollView>
      <FormProvider {...form}>
        <CustomTextInput
          name="cardNumber"
          label="Numéro de carte"
          placeholder="0606060606"
          inputMode="numeric"
        />
        <View style={{ flexDirection: 'row', gap: 5 }}>
          <CustomTextInput
            name="expires"
            label="Date d'expiration"
            placeholder="MM/YY"
            inputMode="numeric"
            containerStyle={{ flex: 1 }}
          />
          <CustomTextInput
            name="cvv"
            label="CVV"
            placeholder="123"
            inputMode="numeric"
            containerStyle={{ flex: 1 }}
          />
        </View>
        <CustomButton
          title="Redirect to Confirm"
          onPress={form.handleSubmit(handleNext)}
          style={styles.button}
        />
      </FormProvider>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  button: { marginTop: 'auto' },
});
