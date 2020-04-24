import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import * as firebase from "firebase";

export default class LoadingScreen extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            let emailVerified;
            if(user != null){
                emailVerified = user.emailVerified;
            } else{
                emailVerified =false;
            }

            if( user = null){
                this.props.navigation.navigate( "Auth");
            } else{
                this.props.navigation.navigate(emailVerified? "Main": "Auth")
            }

        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Loading</Text>
                <ActivityIndicator size="large" />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
