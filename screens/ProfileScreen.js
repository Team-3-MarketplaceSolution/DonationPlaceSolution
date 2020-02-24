import React, {Component} from 'react';
import { ExpoConfigView } from '@expo/samples';
import { View, Text, TextInput, TouchableOpacity,StyleSheet, Button} from 'react-native';
import * as firebase from "firebase";
import Colors from "../constants/Colors";



export default class ProfileScreen extends React.Component {
    state = {
        email:"",
        displayName: "",
        uid:"",
        firstName:"",
        lastName:""
    }

    onEditProfileButtonClicked =()=>{
        this.props.navigation.navigate('EditProfile', {
            uid: this.state.uid,
        })
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
                <Text style = {style.header}>Hi {this.state.firstName} {this.state.lastName} !</Text>
                <Text style = {style.emailText}>Email: {this.state.email}</Text>
                <Text>Address: </Text>
                <TouchableOpacity style={style.profilePageButton} title="LogOut" onPress={this.onEditProfileButtonClicked}>
                    <Text style={{  }}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.profilePageButton} title="LogOut" onPress={() => firebase.auth().signOut()}>
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign Out</Text>
                </TouchableOpacity>
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
    },
    header:{
        marginTop:15,
        fontWeight: "500",
        fontSize: 20
    },
    emailText:{
        marginTop:15,
    },
    profilePageButton:{
        marginTop:"auto",
        marginBottom:15,
        width: '80%',
        backgroundColor: Colors.buttonColor,
        borderRadius: 4,
        height: 55,
        alignItems: "center",
        justifyContent: "center"
}
})
