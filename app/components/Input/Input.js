import React from 'react';
import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Input = ({
  label, value, onChangeText, placeholder, secureTextEntry,
}) => (
  <View style={styles.container}>
    <Text style={styles.text}>Label</Text>
    <TextInput
      autoCorrect={false}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  </View>
);

Input.propTypes = {
  children: PropTypes.any,
};

export default Input;
