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

            <View style = {style.container}>
                <Text>Hi {this.state.displayName}!</Text>
                <Text>Hi {this.state.email}!</Text>
                <Button title="LogOut" onPress={() => firebase.auth().signOut()}/>
            </View>
        );
    }
}



ProfileScreen.navigationOptions = {
  title: 'Profile',
};

const style =  StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }
})
