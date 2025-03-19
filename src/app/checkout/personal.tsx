import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { router } from 'expo-router';

export default function PersonalDetailsForm() {
  const handleNext = () => {
    // validate form

    // redirect
    router.push('/checkout/payment');
  };

  return (
    <View style={styles.container}>
      <Text>Personal</Text>
      <CustomButton
        title="Redirect to Payment"
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
