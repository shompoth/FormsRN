import { StyleSheet, View } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { router } from 'expo-router';
import CustomTextInput from '../../components/CustomTextInput';
import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

const PersonalInfoSchema = z.object({
  fullName: z
    .string({ message: 'Full name is required!' })
    .min(1, { message: 'Full name must be longer than 1' }),
  address: z.string().min(1, { message: 'Please provide your address!' }),
  city: z.string().min(1, { message: 'City is required!' }),
  postCode: z.string().min(1, { message: 'Postal code is required!' }),
  phone: z.string().min(1, { message: 'Phone is required!' }),
});

type PersonalInfo = z.infer<typeof PersonalInfoSchema>;

export default function PersonalDetailsForm() {
  const form = useForm<PersonalInfo>({
    resolver: zodResolver(PersonalInfoSchema),
  });
  // const {
  //   handleSubmit,
  //   formState: { errors },
  //   control,
  // } = useForm();

  const handleNext: SubmitHandler<PersonalInfo> = (data) => {
    // validate form

    // redirect
    router.push('/checkout/payment');
  };

  return (
    <KeyboardAwareScrollView>
      <FormProvider {...form}>
        <CustomTextInput
          name="fullName"
          label="Non complet"
          placeholder="John doe"
        />
        <CustomTextInput name="address" label="Adresse" placeholder="Adresse" />
        <View style={{ flexDirection: 'row', gap: 5 }}>
          <CustomTextInput
            name="city"
            label="Ville"
            placeholder="City"
            containerStyle={{ flex: 1 }}
          />
          <CustomTextInput
            name="postCode"
            label="Code postal"
            placeholder="75000"
            containerStyle={{ flex: 1 }}
          />
        </View>
        <CustomTextInput
          name="phone"
          label="Numéro de tel"
          placeholder="0606060606"
          inputMode="tel"
        />

        <CustomButton
          title="Redirect to Payment"
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
