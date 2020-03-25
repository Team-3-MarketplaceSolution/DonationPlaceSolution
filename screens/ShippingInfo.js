import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet, Button, Image} from 'react-native';

export default class ShippingInfo extends React.Component {
    state = {
        
     }
     

    render(){
        return (
            <View style={styles.container}>
                <Text>Your current tracking number is: 1Z94125299 </Text>

                <Text>Please print and visit your local FEDEX with this label</Text>
                <Text>The staff will assit you in shipping the package</Text>
                <Text>

                </Text>
    
                <Image 
                source = {require('../assets/images/ShipmentLabel.jpg')}
                style={{ height: 500, width: 350, flex: 1}}
                />

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
                Text: {
                borderBottomColor: "#8A8F9E",
                width: '80%',
                borderBottomWidth: StyleSheet.hairlineWidth,
                height: 40,
                fontSize: 22,
                color: "#161F3D",
                marginTop: 10
            },
            
            Image: {
                width: 250,
                height: 500,
                flex: 1,
            }

            });

