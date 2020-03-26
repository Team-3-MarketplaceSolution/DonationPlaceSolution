import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import * as firebase from "firebase";
import {
    Container,
    List,
    Content,
    ListItem,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Right
} from "native-base";

export default class MyDonationScreen extends React.Component {
    state = {
        lists: [],
    };

    componentDidMount() {
        let lists=[];
        const uid = this.props.navigation.getParam('uid');
        console.log(uid);
        firebase.database().ref('Lists/'+uid).on('value',(data)=>{
           data.forEach((childSnapshot) =>{
               console.log(childSnapshot.key)
               lists.push(childSnapshot.key);
            })
            this.setState({lists:lists});
        });

    }

    render(){
        return(
            <View styel={style.container}>
                {this.state.lists.map(list => <Card><Text key={list} style={style.list}>List No.{list}</Text></Card>)}
            </View>
        );
}

}

const style = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    list:{
        textAlign:'center',
        padding: 15
    }

})