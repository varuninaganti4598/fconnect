import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
// import firebase from 'firebase';
import { firebase } from '@firebase/app'

class DashboardScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>DashboardScreen</Text>
        <Button title="Sign out" onPress={() => firebase.auth().signOut()} />
      </View>
    );
  }
}
export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    
    alignItems: 'center',
    justifyContent: 'center'
  }
});