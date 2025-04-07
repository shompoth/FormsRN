import { StyleSheet, View } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { router } from 'expo-router';
import CustomTextInput from '../../components/CustomTextInput';
import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView';

export default function PersonalDetailsForm() {
  const handleNext = () => {
    // validate form

    // redirect
    router.push('/checkout/payment');
  };

  return (
    <KeyboardAwareScrollView>
      <CustomTextInput label="Non complet" placeholder="John doe" />
      <View style={{ flexDirection: 'row', gap: 5 }}>
        <CustomTextInput
          label="Ville"
          placeholder="City"
          containerStyle={{ flex: 1 }}
        />
        <CustomTextInput
          label="Code postal"
          placeholder="75000"
          containerStyle={{ flex: 1 }}
        />
      </View>
      <CustomTextInput
        label="Numéro de tel"
        placeholder="0606060606"
        inputMode="tel"
      />

      <CustomButton
        title="Redirect to Payment"
        onPress={handleNext}
        style={styles.button}
      />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  button: { marginTop: 'auto' },
});
