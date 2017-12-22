import React, { Component } from 'react';
import { ActivityIndicator, View, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as firebase from 'firebase';
import { Container } from '../components/Container';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

class Login extends Component {
  state = {
    email: '',
    password: '',
    authenticating: false,
  };

  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyBTNTx1cp-bZ3SquR9d6btC974MUnsPMb0',
      authDomain: 'react-native-firebase-20f8d.firebaseapp.com',
    };
    firebase.initializeApp(firebaseConfig);
  }
  onPressSingIn() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...

        console.log(errorMessage);
        // ...
      });
  }

  renderCurrentState() {
    if (this.state.authenticating) {
      return (
        <View style={styles.form}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View style={styles.form}>
        <Input
          placeholder="Enter your email..."
          label="Email"
          onChangeText={email => this.setState({ email })}
        />
        <Input
          onChangeText={password => this.setState({ password })}
          placeholder="Password"
          label="Enter your password"
          secureTextEntry
        />
        <Button onPress={() => this.onPressSingIn()}>Log in</Button>
      </View>
    );
  }
  render() {
    return <Container>{this.renderCurrentState()}</Container>;
  }
}

const styles = EStyleSheet.create({
  form: {
    flex: 1,
  },
});

export default Login;
