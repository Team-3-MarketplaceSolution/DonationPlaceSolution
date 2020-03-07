import React, {Component} from 'react';
import {ExpoConfigView} from '@expo/samples';
import {View, Text, StyleSheet} from 'react-native';
import * as firebase from "firebase";
import Icon from 'react-native-vector-icons/FontAwesome5';
import SubmitButton from "../components/SubmitButton";
import {List, ListItem, Left, Body} from "native-base";


export default class ProfileScreen extends React.Component {
    state = {
        email: "",
        displayName: "",
        uid: "",
        first_name: '',
        last_name: '',
        street1: '',
        street2: '',
        city: '',
        state: '',
        zip: '',
        errorMessage: null
    }

    onEditProfileButtonClicked = () => {
        this.props.navigation.navigate('EditProfile', {
            uid: this.state.uid,
        })
    }
    onSignOutButtonClicked = () => {
        firebase.auth().signOut();
    }


    componentDidMount() {
        const {email, displayName, uid} = firebase.auth().currentUser;
        this.setState({email, displayName, uid});
        firebase.database().ref('Users/' + uid).on('value', (data) => {
            console.log(data.toJSON().first_name)
            this.setState(data.toJSON());
        })
    }

    render() {
        return (
            <View style={style.container}>
                <Text style={style.header}>Hi {this.state.first_name} {this.state.last_name} !</Text>
                <List style={style.list}>
                    <ListItem icon>
                        <Left>
                            <Icon name="envelope"/>
                        </Left>
                        <Body>
                            <Text>Email: {this.state.email}</Text></Body>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="home"/>
                        </Left>
                        <Body>
                        <Text>Address</Text>
                        </Body>
                    </ListItem>
                    <View style={style.addressList}>
                    <ListItem><Text>Street1: {this.state.street1}</Text></ListItem>
                    <ListItem><Text>Street2: {this.state.street2}</Text></ListItem>
                    <ListItem><Text>City: {this.state.city}</Text></ListItem>
                    <ListItem><Text>State: {this.state.state}</Text></ListItem>
                    <ListItem><Text>ZipCode: {this.state.zip}</Text></ListItem>
                    </View>
                </List>
                <View style={style.buttonContainer}>
                    <SubmitButton click={this.onEditProfileButtonClicked}>Edit Profile</SubmitButton>
                    <SubmitButton click={this.onSignOutButtonClicked}>Sign Out</SubmitButton>
                </View>
            </View>
        );
    }
}


ProfileScreen.navigationOptions = {
    title: 'Profile',
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    list: {
        marginTop: 40,
        width: '75%',
    },
    header: {
        marginTop: 15,
        fontWeight: "500",
        fontSize: 20
    },
    buttonContainer: {
        width: '100%',
        marginTop: "auto",
        marginBottom: 15,
        alignItems: 'center',
    },
    addressList:{
        marginLeft:30,
    }

})
