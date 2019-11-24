import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet, Button} from 'react-native';
import StaticContainer from "react-native-web/src/vendor/react-native/StaticContainer";



//LOGIN CONTAINER
export default class LoginScreen extends React.Component{
    state = { email: '', password: ''}
    handleLogin = () => {
        console.log("Login");
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Email"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    secureTextEntry
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Password"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />
                <Button title="Login" onPress={this.handleLogin} />
                <View style={styles.signUpContainer}>
                <Text >Don't have an account?</Text>
                <Button
                    title="Sign Up"
                    onPress={() => this.props.navigation.navigate('SignUp')}
                />
                </View>
            </View>

        );
    }
}

// STYLING 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#99ccff'
    },
    textInput: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
    },
    signUpContainer:{
        flexDirection: "row",
        alignItems: 'center',
        position: 'absolute',
        bottom: 20
    },

});
