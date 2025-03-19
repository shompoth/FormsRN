import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { router } from 'expo-router';

export default function ConfirmForm() {
  const handleNext = () => {
    // validate form

    // submit data

    // redirect
    router.dismissAll();
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text>Confirm</Text>
      <CustomButton title="Submit" onPress={handleNext} style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 10 },
  button: { marginTop: 'auto', marginBottom: 25 },
});
