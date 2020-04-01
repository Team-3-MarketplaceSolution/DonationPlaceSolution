import React from 'react';
import {View,ScrollView, Text, StyleSheet} from 'react-native';
import * as firebase from "firebase";
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
import Icon from "react-native-vector-icons/FontAwesome5";

// const icons = {
//     shirts:'tshirt',
//
// }


export default class ListScreen extends React.Component {
    state = {
        listID: "",
        shirts: "",
        inHonorOf: "",
        jackets: "8",
        pants: "",
        status: "Created",
        sweaters: "",
        values:{},
    }


    componentDidMount() {
        const myListID = this.props.navigation.getParam('listID');
        this.setState({listID: myListID});
        console.log(this.state); 
        console.log(myListID);

        firebase.database().ref('Lists/' +firebase.auth().currentUser.uid + '/' + myListID).on('value', (data) => {
            this.setState(data.val());
        })

        firebase.database().ref('Values').on('value', (data) => {
            this.setState({values:data.val()});
        })
        console.log(this.state);
    }


    render() {
        let honor;
        if(this.state.inHonorOf){
            honor = <Card><Text style={style.cardText}>Donation In Honor Of: {this.state.inHonorOf}</Text></Card>;
        }
        let lists;
        let sum =0;
        return (
            <ScrollView>
                <Text style={style.titleText}>List: {this.state.listID}</Text>
                {Object.entries(this.state).map((item)=> {
                    if ((item[0] === 'jackets' || item[0]==='pants'||item[0]==='sweaters' ||item[0]==='shirts') && item[1]){
                        let price = this.state.values[item[0]];
                        sum += item[1] * price;
                        console.log(sum);

                        return (<Card key={item[0]}>
                            <CardItem>
                                <Left ><View style={{backgroundColor:'#e9f5ec', width:60, height:60, justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon style={{margin: 'auto', fontSize: 28 }} name="tshirt"/>
                                </View>
                                </Left>
                                <Body style={{ marginStart: -30}}><Text style={style.cardTitleText}>{item[0]}</Text>
                                    <Text style={style.cardSubTitleText}>${price}</Text>
                                </Body>
                                <Right><Badge style={{ backgroundColor: Colors.buttonColor }}>
                                    <Text>   {item[1]}   </Text>
                                </Badge></Right>
                            </CardItem>

                        </Card>);
                    }
                })}
                <Card><Text style={style.boldText}>Total Value: ${sum}</Text></Card>
                {honor}
                <Card><Text style={style.boldText}>Status: {this.state.status}</Text></Card>
            </ScrollView>
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
    },
    cardTitleText:{
        fontSize: 20,
        textAlign:'left',
        padding:5,
    },
    cardSubTitleText:{
        fontSize: 15,
        textAlign:'left',
        padding:5,
    },
    titleText:{
        backgroundColor: Colors.buttonColor,
        textAlign:'center',
        padding: 15
    },
    boldText:{
        fontWeight:'bold',
        textAlign:'center',
        padding: 15
    }

})
