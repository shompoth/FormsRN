import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, { ComponentProps } from 'react';

type CustomTextInputProps = {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
} & ComponentProps<typeof TextInput>;

const CustomTextInput = ({
  label,
  containerStyle,
  ...textInputProps
}: CustomTextInputProps) => {
  const error = { message: 'This field is required' };
  return (
    <View style={containerStyle}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        {...textInputProps}
        style={[
          styles.textInput,
          textInputProps.style,
          error ? styles.errorInput : {},
        ]}
      />
      <Text style={styles.error} numberOfLines={1}>
        {error?.message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  label: {
    fontWeight: '600',
    color: 'dimgray',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    padding: 10,
    borderRadius: 5,

    marginTop: 4,
    marginBottom: 2,
  },
  error: {
    color: 'crimson',
    height: 17,
  },
  errorInput: {
    borderColor: 'crimson',
  },
});

export default CustomTextInput;
