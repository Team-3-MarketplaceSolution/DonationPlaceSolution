import React from 'react';
import {View, Text} from 'react-native';
import * as firebase from "firebase";
export default class ListScreen extends React.Component {
    state = {
        listID: "",
    };
    componentDidMount() {
        const myListID = this.props.navigation.getParam('listID');
        this.setState({listID: myListID});
        console.log(myListID);
    }

    render(){
        return(
        <View>
            <Text>List</Text>
            <Text>{this.state.listID}</Text>

        </View>
        );
    }

}
