import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { View, Text, TextInput, TouchableOpacity,StyleSheet, Button} from 'react-native';
import * as firebase from "firebase";



export default function ProfileScreen() {

    return (
        <View>
          <Button title="LogOut"  onPress={() => firebase.auth().signOut()} />
        </View>
    );
}

ProfileScreen.navigationOptions = {
  title: 'LogOut',
};
