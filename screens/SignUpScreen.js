import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet, Button} from 'react-native';

export default class SignUpScreen extends React.Component {
    state = { 
                email: '', 
                password: '', 
                first_name: '', 
                last_name: '', 
                phone: '', 
                street1: '', 
                street2: '', 
                city: '', 
                state: '', 
                zip: '', 
                errorMessage: null
            };

    render(){
        return( 
        <Text>Sign UP</Text>
            



            
            
            );
    }
}
