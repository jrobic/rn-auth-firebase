import React, { Component } from 'react';
import { View } from 'react-native';
import * as firebase from 'firebase';

import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

import config from '../config';

const onLogoutPress = () => {
  firebase.auth().signOut();
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { loggedIn: null };
  }

  componentWillMount() {
    firebase.initializeApp(config.firebase);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setTimeout(() => this.setState({ loggedIn: true }), 0);
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderForm() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{ flexDirection: 'row' }}>
            <Button onPress={onLogoutPress}>Log Out</Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <View style={{ marginTop: 10 }}>
          {this.renderForm()}
        </View>
      </View>
    );
  }
}

export default App;
