import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet, Button} from 'react-native';
import * as firebase from "firebase";
import Colors from "../constants/Colors";

export default class SignUpScreen extends React.Component {
    state = {
        first_name: "",
        last_name:"",
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

    handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(userCredentials => {
                return userCredentials.user.updateProfile({
                    displayName: this.state.name
                });
            })
            .catch(error => this.setState({ errorMessage: error.message }));
    };


    render(){
        return (
            <View style={styles.container}>
                        <TextInput
                            style={styles.textInput}
                            autoCapitalize="none"
                            placeholder="First Name"
                            onChangeText={firstName => this.setState({ firstName })}
                            value={this.state.firstName}
                        />

                        <TextInput
                            style={styles.textInput}
                            autoCapitalize="none"
                            placeholder="Last Name"
                            onChangeText={lastName => this.setState({ lastName })}
                            value={this.state.lastName}
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

                <TouchableOpacity style = {styles.button} onPress={this.handleSignUp} >
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign Up</Text>
                </TouchableOpacity>
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
                button: {
                marginTop:20,
                width:"80%",
                backgroundColor: Colors.buttonColor,
                borderRadius: 4,
                height: 55,
                alignItems: "center",
                justifyContent: "center"
            }

            });

