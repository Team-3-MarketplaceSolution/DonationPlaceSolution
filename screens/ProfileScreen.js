import React, {Component} from 'react';
import { ExpoConfigView } from '@expo/samples';
import { View, Text, TextInput, TouchableOpacity,StyleSheet, Button} from 'react-native';
import * as firebase from "firebase";



export default class ProfileScreen extends React.Component {
    state = {
        email:"",
        firstName: ""
    }

    componentDidMount() {
        const {email, displayName} = firebase.auth().currentUser;
        console.log(firebase.auth().currentUser);
        this.setState({email,displayName});
    }

    render() {
        return (

            <View>
                <Text>Hi {this.state.email}!</Text>
                <Text>Hi {this.state.displayName}!</Text>
                <Button title="LogOut" onPress={() => firebase.auth().signOut()}/>
            </View>
        );
    }
}



ProfileScreen.navigationOptions = {
  title: 'LogOut',
};
