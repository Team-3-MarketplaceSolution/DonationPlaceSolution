import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet, Button} from 'react-native';
import * as firebase from "firebase";
import Colors from "../constants/Colors";
import SubmitButton from "../components/SubmitButton";

export default class SignUpScreen extends React.Component {
    state = {
        first_name: '',
        last_name:'',
        email: "",
        password: "",
        phone: '',
        street1: '',
        street2: '',
        city: '',
        state: '',
        zip: '',
        errorMessage: null
    };

    writeUserData=(uid,email, first_name,last_name)=>{
        
            firebase.database().ref('Users/'+uid).set({
                email: email,
                first_name: first_name,
                last_name: last_name
            }).then((data)=>{
                //success callback
                console.log('data ' , data)
                console.log(first_name);
            }).catch(error => this.setState({errorMessage: error.message}))
    }

    handleSignUp = () => {
        if(this.state.first_name.trim() === ''){
            this.setState({errorMessage: 'Please fill in First Name!'});
        }else if(this.state.last_name.trim() === ''){
            this.setState({errorMessage: 'Please fill in Last Name!'});
        }else {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(userCredentials => {
                    console.log(userCredentials);
                    this.writeUserData(userCredentials.user.uid, this.state.email, this.state.first_name, this.state.last_name);
                    return userCredentials.user.updateProfile({
                        displayName: this.state.first_name
                    });
                })
                .catch(error => this.setState({errorMessage: error.message}));
        }
    };


    render(){
        return (
            <View style={styles.container}>
                <Text>{this.state.errorMessage}</Text>

                    <TextInput
                        style={styles.textInput}
                        autoCapitalize="none"
                        placeholder="First Name"
                        onChangeText={first_name => this.setState({ first_name })}
                        value={this.state.first_name}
                    />

                    <TextInput
                        style={styles.textInput}
                        autoCapitalize="none"
                        placeholder="Last Name"
                        onChangeText={last_name => this.setState({ last_name })}
                        value={this.state.last_name}
                    />

                    <TextInput
                        style={styles.textInput}
                        autoCapitalize="none"
                        placeholder="Email"
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                    />

                    <TextInput
                        style={styles.textInput}
                        secureTextEntry
                        autoCapitalize="none"
                        placeholder="Password"
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                    />

                <SubmitButton click = {this.handleSignUp}>Sign Up</SubmitButton>
            </View>

        );
                }
            }

        const styles = StyleSheet.create({
                container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
            },
                textInput: {
                borderBottomColor: "#8A8F9E",
                width: '80%',
                borderBottomWidth: StyleSheet.hairlineWidth,
                height: 40,
                fontSize: 15,
                color: "#161F3D",
                marginTop: 10
            },

            });

