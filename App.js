import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView,Button,TextInput,TouchableOpacity,Image} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import LoadingScreen from './screens/LoadingScreen';

// import * as firebase from 'firebase';
import { firebaseConfig } from './config';
import { firebase } from '@firebase/app'
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
// firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  SignIn = (email, password) => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password);
      firebase.auth().onAuthStateChanged(user => {
         alert(user.email);
        //this.props.navigation.navigate('DashboardScreen');
      })
} catch (error) {
      console.log(error.toString(error));
    }
  };
  


  render() {
    return (
      <SafeAreaView style={styles.container}>
        
        <View>
        <Image source={require('./assets/3.jpg')}  style={styles.img} />
        
        </View>
      
      <Text style={styles.text}>Signin with details</Text>
      <TextInput style={styles.textinput}
      placeholder="Email"  onChangeText={email => this.setState({ email })}
      />
      <TextInput style={styles.textinput}
      placeholder="Password"
      secureTextEntry={true}
      onChangeText={password => this.setState({ password })} /> 
      <View >
      
      
      <TouchableOpacity style={styles.signupBtn}  onPress={() => this.SignIn(this.state.email, this.state.password)}>
           <Text style={styles.textsign}>SignIn</Text>
          </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      
    </View>
    <View>
    <Text style={styles.orlogin}>
      ---------or login using---------
      
      </Text>
      <AppNavigator />
     </View>
      
      
      <StatusBar style="auto" />
    </SafeAreaView>   
           
      
      );
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text:{
    paddingLeft:20,
    textAlign: 'center',
    fontSize:25,
    // fontFamily: 'serif'
},
  textinput: {
    textAlign: 'center',
    color: "#121212",
    height: 38,
    width: 250,
    fontSize: 18,
    marginTop: 8,
    marginLeft: 28,
    borderWidth: 2,
    borderRadius: 20 
  },
  img :{
    height:150,
    width:300,
    marginTop: 20,
    marginLeft: 12
  },
 orlogin:{
  paddingLeft:20,
  paddingBottom: 10,
  
 },
  signupBtn: {
    width:80,
    marginTop:10,
    paddingTop:12,
    paddingBottom:12,
    marginLeft:32,
    backgroundColor:'dodgerblue',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    paddingLeft: 20,
    paddingTop:10
  },
  textsign:{
    color:"white",
    fontWeight:"bold",
    textAlign:'center'
  }
});
