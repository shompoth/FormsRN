import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { Link, router } from 'expo-router';
import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView';
import { useCheckoutForm } from '../../contexts/CheckoutFormProvider';

export default function ConfirmForm() {
  const { personalInfo, paymentInfo, handleSubmit } = useCheckoutForm();

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        {personalInfo && (
          <View style={styles.dataContainer}>
            <View style={styles.dataContainerHeader}>
              <Text style={styles.title}>Personal</Text>
              <Link
                href={'/checkout'}
                style={{ color: '#005055', fontWeight: '600' }}
              >
                Edit
              </Link>
            </View>
            {Object.entries(personalInfo).map(([key, value]) => (
              <Text key={key}>
                {key}: {value}
              </Text>
            ))}
          </View>
        )}
        {paymentInfo && (
          <View style={styles.dataContainer}>
            <View style={styles.dataContainerHeader}>
              <Text style={styles.title}>Payment</Text>
              <Link
                href={'/checkout/payment'}
                style={{ color: '#005055', fontWeight: '600' }}
              >
                Edit
              </Link>
            </View>
            {Object.entries(paymentInfo).map(([key, value]) => (
              <Text key={key}>
                {key}: {value}
              </Text>
            ))}
          </View>
        )}
        <CustomButton
          title="Submit"
          onPress={handleSubmit}
          style={styles.button}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    gap: 15,
  },
  dataContainer: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    padding: 10,
    borderRadius: 10,
    gap: 3,
  },
  dataContainerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  button: { marginTop: 'auto' },
});
