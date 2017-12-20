import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

const Logo = () => (
  <View style={styles.container}>
    <Text>La quiniela mas juagada en el mundo</Text>
    <Image style={styles.containerImage} source={require('./images/copa1.png')} />
  </View>
);

export default Logo;
