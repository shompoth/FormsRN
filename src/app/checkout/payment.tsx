import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { router } from 'expo-router';

export default function PaymentDetailsForm() {
  const handleNext = () => {
    // validate form

    // redirect
    router.push('/checkout/confirm');
  };

  return (
    <View style={styles.container}>
      <Text>Payment</Text>
      <CustomButton
        title="Redirect to Confirm"
        onPress={handleNext}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 10 },
  button: { marginTop: 'auto', marginBottom: 25 },
});
