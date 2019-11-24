import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoadingScreen from "../screens/LoadingScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import {createStackNavigator} from "react-navigation-stack";


const AuthNavigator = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: () =>({
            header: null
        })
    },
    SignUp: SignUpScreen,

});

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html

    Loading: LoadingScreen,
    Main: MainTabNavigator,
    Auth: AuthNavigator,

  },
      //Comment this out or change the initialRoutName to Main when u want to test the main page
      {
          initialRouteName: 'Loading',
      }

  )
);
