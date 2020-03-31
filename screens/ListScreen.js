import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
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


export default class ListScreen extends React.Component {
    state = {
        listID: "",
        shirts: "",
        inHonorOf: "",
        jackets: "8",
        pants: "",
        status: "Created",
        sweaters: "",
    }


    componentDidMount() {

        const myListID = this.props.navigation.getParam('listID');
        this.setState({listID: myListID});
        console.log(this.state); 
        console.log(myListID);

        firebase.database().ref('Lists/' +firebase.auth().currentUser.uid + '/' + myListID).on('value', (data) => {
            this.setState(data.val());
        })
        console.log(this.state);
    }





    render() {
        let honor;
        if(this.state.inHonorOf){
            honor = <Card><Text style={style.cardText}>Donation In Honor Of: {this.state.inHonorOf}</Text></Card>;
        }

        return (
            <View>

                <Text style={style.cardText}>List: {this.state.listID}</Text>
                {
                    Object.entries(this.state).map(function (item) {

                    if ((item[0] === 'jackets' || item[0]==='pants'||item[0]==='sweaters' ||item[0]==='shirts') && item[1]){
                    return(<Card><Text style={style.cardText}>{item[0]} X {item[1]}</Text></Card>);

                }
                    })
                }

                {honor}
                <Card><Text style={style.cardText}>Status: {this.state.status}</Text></Card>

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
    cardText:{
        textAlign:'center',
        padding: 15
    }

})
