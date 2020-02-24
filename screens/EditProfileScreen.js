import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import * as firebase from "firebase";
import Colors from "../constants/Colors";

export default class SignUpScreen extends React.Component {
    state = {
        first_name: '',
        last_name:'',
        street1: '',
        street2: '',
        city: '',
        state: '',
        zip: '',
        errorMessage: null
    };


    componentDidMount() {
        const uid = this.props.navigation.getParam('uid');
        console.log(uid);
        firebase.database().ref('Users/'+uid).on('value',(data)=>{
            this.setState(data.toJSON());});
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.errorMessage}</Text>

                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="First Name"
                    onChangeText={first_name => this.setState({first_name})}
                    value={this.state.first_name}
                />

                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Last Name"
                    onChangeText={last_name => this.setState({last_name})}
                    value={this.state.last_name}
                />

                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Address"
                    onChangeText={street1 => this.setState({street1})}
                    value={this.state.password}
                />
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Street1"
                    onChangeText={street2 => this.setState({street2})}
                    value={this.state.street1}
                />
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Street2"
                    onChangeText={street2 => this.setState({street2})}
                    value={this.state.street2}
                />
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="City"
                    onChangeText={city => this.setState({city})}
                    value={this.state.city}
                />
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="State"
                    onChangeText={city => this.setState({state})}
                    value={this.state.state}
                />

                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={{color: "#FFF", fontWeight: "500"}}>Update</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// LinksScreen.navigationOptions = {
//     title: 'Links',
// };

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
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