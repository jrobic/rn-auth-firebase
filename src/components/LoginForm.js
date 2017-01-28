import React, { Component } from 'react';
import { Text } from 'react-native';
import * as firebase from 'firebase';

import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: null,
      loading: false,
    };

    this.handleEmailChange = this.handleChange.bind(this, 'email');
    this.handlePasswordChange = this.handleChange.bind(this, 'password');
    this.onButtonPress = this.onButtonPress.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLoginError = this.onLoginError.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  async onButtonPress() {
    const { email, password } = this.state;

    if (email === '' && password === '') {
      this.onLoginError('Email and Password is required!');
      return;
    }

    this.setState({ loading: true });

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      this.onLoginSuccess();
    } catch (authError) {
      if (authError.code !== 'auth/wrong-password') {
        this.createUser();
      } else {
        this.onLoginError(authError.message);
      }
    }
  }

  onLoginSuccess() {
    this.setState({ email: '', password: '', error: null, loading: false });
  }

  onLoginError(error) {
    this.setState({ error, loading: false });
  }

  async createUser() {
    const { email, password } = this.state;
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      this.onLoginSuccess();
    } catch (createError) {
      this.onLoginError(createError.message);
    }
  }

  handleChange(field, value) {
    this.setState({ [field]: value });
  }

  renderButton() {
    return this.state.loading ?
      <Spinner size="small" />
      : <Button onPress={this.onButtonPress}>Login</Button>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.email}
            label="Email"
            onChangeText={this.handleEmailChange}
            placeholder="john@doe.com"
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            value={this.state.password}
            label="Password"
            onChangeText={this.handlePasswordChange}
            placeholder="my passwod"
          />
        </CardSection>

        {
          this.state.error &&
          <Text style={styles.errorStyle}>
            {this.state.error}
          </Text>
        }

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#EF5350',
    paddingTop: 10,
    paddingBottom: 10,
  },
};


export default LoginForm;