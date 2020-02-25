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
        first_name: '',
        last_name:'',
        street1: '',
        street2: '',
        city: '',
        state: '',
        zip: '',
        errorMessage: null
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
            this.setState(data.toJSON());
        })
    }

    render() {
        return (
            <View style = {style.container}>
                <Text style = {style.header}>Hi {this.state.first_name} {this.state.last_name} !</Text>
                <Text style = {style.emailText}>Email: {this.state.email}</Text>
                <Text style = {style.emailText}>Street1: {this.state.street1}</Text>
                <Text style = {style.emailText}>Street2: {this.state.street2}</Text>
                <Text style = {style.emailText}>City: {this.state.city}</Text>
                <Text style = {style.emailText}>State: {this.state.state}</Text>
                <Text style = {style.emailText}>ZipCode: {this.state.zip}</Text>
                <View style={style.buttonContainer}>
                    <TouchableOpacity style={style.profilePageButton} title="LogOut" onPress={this.onEditProfileButtonClicked}>
                        <Text style={{ color: "#FFF", fontWeight: "500" }}>Edit Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.profilePageButton} title="LogOut" onPress={() => firebase.auth().signOut()}>
                        <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
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
    buttonContainer:{
        width:'100%',
        marginTop:"auto",
        marginBottom:15,
        alignItems:'center',
    },
    profilePageButton:{
        marginTop: 10,
        width: '80%',
        backgroundColor: Colors.buttonColor,
        borderRadius: 4,
        height: 55,
        alignItems: "center",
        justifyContent: "center"
}
})
