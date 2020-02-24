import React, {Component} from 'react';
import { ExpoConfigView } from '@expo/samples';
import { View, Text, TextInput, TouchableOpacity,StyleSheet, Button} from 'react-native';
import * as firebase from "firebase";



export default class ProfileScreen extends React.Component {
    state = {
        email:"",
        displayName: "",
        uid:"",
        firstName:"",
        lastName:""
    }

    componentDidMount() {
        const {email, displayName,uid} = firebase.auth().currentUser;
        this.setState({email,displayName,uid});
        firebase.database().ref('Users/'+uid).on('value',(data)=>{
            console.log(data.toJSON().first_name)
            this.setState({firstName:data.toJSON().first_name, lastName: data.toJSON().last_name});
        })

    }

    render() {
        return (

            <View style = {style.container}>
                <Text>Hi {this.state.firstName} {this.state.lastName} !</Text>
                <Text>Email: {this.state.email}!</Text>
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
