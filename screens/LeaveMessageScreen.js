import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Button, Image, ScrollView} from 'react-native';
import email from 'react-native-email'
import SubmitButton from "../components/SubmitButton";
import Icon from "react-native-vector-icons/FontAwesome5";
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
import Colors from "../constants/Colors";

export default class LeaveMessageScreen extends React.Component {
    state = {
        email: 'support@donationplacesolution.com',
        subject: '',
        body: '',
    }

    render() {
        return (
            <ScrollView>
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
                        <View style={styles.messageBody}>
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

                    <View>
                        <Text style={{padding: 20, marginTop: 20, fontWeight: 600, fontSize: 20, textAlign: 'center'}}>Contact
                            US</Text>
                        <Text style={styles.title2}>Get Information:</Text>
                        <Text>info@donationplacesolution.com</Text>
                        <Text style={styles.title2}>Press or media request:</Text>
                        <Text>press@donationplacesolution.com</Text>
                    </View>

                    <View style={styles.footerContainer}>
                        <Text style={{padding: 20, marginTop: 10, color: 'white', fontWeight: 600, fontSize: 20,}}>Follow
                            Us On</Text>
                        <View style={styles.iconContainer}>
                            <Icon style={styles.icon} name="github"/>
                            <Icon style={styles.icon} name="twitter"/>
                            <Icon style={styles.icon} name="facebook-square"/>
                            <Icon style={styles.icon} name="instagram"/>
                        </View>
                    </View>


                </View>

            </ScrollView>
        )
    }

    handleEmail = () => {
        const to = [this.state.email,] // string or array of email addresses
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
        marginTop: 30,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        width: '90%',
        padding: 10,
    },
    messageBody: {
        textAlign: 'left',
        height: 180,
        justifyContent: 'flex-start',
    },
    title: {
        fontWeight: 'bold',
        paddingTop: 15,
        paddingBottom: 15,
    },
    icon: {
        margin: 'auto',
        fontSize: 30,
        padding: 10,
        color: 'white'
    },
    iconContainer: {
        flex: 1,
        flexDirection: 'row',
        margin: 'auto',
        width: '100%',
        justifyContent: 'center',

    },
    footerContainer: {
        flex: 1,
        margin: 'auto',
        width: '100%',
        marginTop: 50,
        paddingTop: 20,
        paddingBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.buttonColor,

    },
    title2: {
        fontWeight:'bold',
        fontSize: 17,
        paddingTop:10,
        paddingBottom:10,
    }
})

