import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import * as firebase from "firebase";
import Colors from "../constants/Colors";
import SubmitButton from "../components/SubmitButton";

export default class SignUpScreen extends React.Component {
    state = {
        uid:"",
        first_name: '',
        last_name:'',
        street1: '',
        street2: '',
        city: '',
        state: '',
        zip: '',
        errorMessage: null
    };

    writeUserData = () =>{
        console.log(this.uid);
        firebase.database().ref('Users/'+this.state.uid).update(
            {
                first_name: this.state.first_name,
                last_name:this.state.last_name,
                street1: this.state.street1,
                street2: this.state.street2,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip,
            }
        ).then((data)=>{
            alert("Information Updated!");
        }).catch(error => this.setState({errorMessage: error.message}))
    }

    handleUpdate = () =>{
        if(this.state.first_name.trim() === ''){
            this.setState({errorMessage: 'Please fill in First Name!'});
        }else if(this.state.last_name.trim() === ''){
            this.setState({errorMessage: 'Please fill in Last Name!'});
        }else {
            this.writeUserData();
        }
    }


    componentDidMount() {
        const uid = this.props.navigation.getParam('uid');
        console.log(uid);
        this.setState({uid: uid});
        firebase.database().ref('Users/'+uid).on('value',(data)=>{
            console.log(data.toJSON());
            this.setState(data.toJSON());
        });
        console.log(this.state);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.errorMessage}</Text>
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="First Name"
                    onChangeText={first_name => this.setState( {first_name})}
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
                    placeholder="Street1"
                    onChangeText={street1 => this.setState({street1})}
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
                    onChangeText={state => this.setState({state})}
                    value={this.state.state}
                />
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="ZipCode"
                    onChangeText={zip => this.setState({zip})}
                    value={this.state.zip}
                />
                <SubmitButton click = {this.handleUpdate}>Submit</SubmitButton>
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