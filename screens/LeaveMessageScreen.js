import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet, Button, Image} from 'react-native';
import email from 'react-native-email'
import SubmitButton from "../components/SubmitButton";
import {
    Container,
    List,
    Content,
    ListItem,
    Card,
    CardItem,
    Thumbnail,
    Badge,
    Right,
    Body,
    Left

} from "native-base";

export default class LeaveMessageScreen extends React.Component {
    state = {
        email:'support@donationplacesolution.com',
        subject:'',
        body:'',
    }

    render() {
        return (
            <View style={styles.container}>
                <Card style={styles.card}>
                    <Text style={styles.title}>To: </Text>
                    <Text>{this.state.email}</Text>
                    <Text style={styles.title}>Subject: </Text>

                    <TextInput
                        // style={styles.textInput}
                        autoCapitalize="none"
                        placeholder="Subject"
                        onChangeText={subject => this.setState({subject})}
                        value={this.state.subject}
                    />
                    <Text style={styles.title}>Your Message: </Text>
                    <View  style={styles.messageBody}>
                        <TextInput
                            // style={styles.messageBody}
                            autoCapitalize="none"
                            placeholder="Your Message"
                            onChangeText={body => this.setState({body})}
                            value={this.state.body}
                        />
                    </View>

                </Card>

                <SubmitButton click={this.handleEmail}>Leave Message</SubmitButton>
            </View>
        )
    }

    handleEmail = () => {
        const to = [this.state.email, ] // string or array of email addresses
        email(to, {
            // Optional additional arguments
            // cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
            // bcc: 'mee@mee.com', // string or array of email addresses
            subject: this.state.subject,
            body: this.state.body,
        }).catch(console.error)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    card:{
       width:'90%',
        padding:10,
    },
    messageBody:{
        textAlign:'left',
        height:'50%',
        justifyContent: 'flex-start',
    },
    title:{
        fontWeight:'bold',
        paddingTop: 15,
        paddingBottom:15,
    }
})

