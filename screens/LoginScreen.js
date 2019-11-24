import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet} from 'react-native';


//LOGIN CONTAINER
export default class LoginScreen extends React.Component{
    state = { email: '', password: ''}
    handleLogin = () => {
        console.log('handleLogin')
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Login Screen</Text>
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Email"
                />
                <TextInput
                    secureTextEntry
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Password"
                />
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
    }
});
