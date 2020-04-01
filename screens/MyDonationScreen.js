import React from 'react';
import {StyleSheet,Text, TextInput, TouchableOpacity, View} from 'react-native';
import * as firebase from "firebase";
import {
    Container,
    List,
    Content,
    ListItem,
    Card,
    CardItem,
    Thumbnail,

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

    onListClicked = (listID) => {
        this.props.navigation.navigate('List', {
            listID: listID,
        })
    }

    render(){
        return(
            <View styel={style.container}>
                <List>
                {this.state.lists.map(listID => <ListItem key={listID}><Text onPress={this.onListClicked.bind(this, listID)} style={style.list} >List No.{listID}</Text></ListItem>)}
                </List>
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