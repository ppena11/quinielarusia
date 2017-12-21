import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import * as firebase from 'firebase';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';

class Login extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyBTNTx1cp-bZ3SquR9d6btC974MUnsPMb0',
      authDomain: 'react-native-firebase-20f8d.firebaseio.com',
    };
    firebase.initializeApp(firebaseConfig);
  }
  handleTheme = () => {
    console.log('pres');
  };
  render() {
    return <Container />;
  }
}

export default Login;
