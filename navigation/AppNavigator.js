import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoadingScreen from "../screens/LoadingScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import firebase from "firebase";
import firebaseConfig from '../constants/firebaseConfig';

firebase.initializeApp(firebaseConfig);
export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    Loading: LoadingScreen,
    Login: LoginScreen,
    SignUp: SignUpScreen,
  },
      //Comment this out or change the initialRoutName to Main when u want to test the main page
      {
          initialRouteName: 'Login',
      }

  )
);
