import React from 'react';
import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Input = ({ children }) => (
  <View style={styles.container}>
    <Text style={styles.text}>La quiniela mas jugada en el mundo</Text>
  </View>
);

Input.propTypes = {
  children: PropTypes.any,
};

export default Input;
